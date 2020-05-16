const fs = require('fs');
const process = require('process');

const { swaggerUIPath, swaggerBasePath } = require('./const/index');
const {
  API_SERVICE_TAGS_TPL,
  API_SERVICE_DOC_URL_TPL,
  API_SERVICE_SUMMARY_TPL,
  API_SERVICE_DESCRIPTION_TPL,
  API_SERVICE_PARAM_PROPS_TPL,
  API_SERVICE_PARAM_TPL,
  API_SERVICE_METHOD_PARAM_TPL,
  API_SERVICE_NAME_TPL,
  API_SERVICE_URL_TPL,
  API_SERVICE_METHOD_TPL,
  API_SERVICE_DEFINITION,
  API_SERVICE_RETURN_VALUE,
} = require('./const/tpl');

const [baseUrl] = process.argv.slice(2);
// const apiInfo = require('./data');
const tpl = fs.readFileSync('./tpl/service.js.tpl') + '';

const parserMap = {
  object: parseObjectParameter,
  array: parseArrayParameter,
  string: parseBasicParameter,
  number: parseBasicParameter,
  boolean: parseBasicParameter,
};

function parseApiInfo(apiInfo) {
  let infos = '';
  const base = baseUrl + swaggerUIPath + swaggerBasePath;
  const { path, methods } = apiInfo;

  for (let methodName in methods) {
    const method = methods[methodName];
    const { parameters, summary, operationId, tags, description = '' } = method;
    const tagStr = tags.join(',');
    const [tag] = tags;
    const link = `${base}${tag}/${operationId}`;
    // TODO: 增加自定义方法名
    const {
      url,
      // params,
      params: { paths, bodies },
    } = parsePathAndParametersToString(path, parameters);

    let paramStr = [paths, bodies]
      .filter((item) => item !== undefined)
      .join('\n');
    const methodParams = parseMethodParameters(parameters);
    const serviceInfo = tpl
      .replace(API_SERVICE_DEFINITION, path)
      .replace(API_SERVICE_DOC_URL_TPL, link)
      .replace(API_SERVICE_TAGS_TPL, tagStr)
      .replace(API_SERVICE_SUMMARY_TPL, summary)
      .replace(API_SERVICE_DESCRIPTION_TPL, description)
      .replace(API_SERVICE_NAME_TPL, operationId)
      .replace(API_SERVICE_METHOD_TPL, methodName)
      .replace(API_SERVICE_PARAM_TPL, 'params')
      .replace(API_SERVICE_URL_TPL, url)
      .replace(API_SERVICE_METHOD_PARAM_TPL, methodParams)
      // TODO: 增加返回值类型解析
      .replace(API_SERVICE_RETURN_VALUE, 'TO BE IMPLEMENTED')
      .replace(API_SERVICE_PARAM_PROPS_TPL, paramStr);

    infos += serviceInfo;
    infos += '\n';
  }
  return infos;
}

// fs.appendFileSync('test.js', '\n' + parseApiInfo(apiInfo));

/**
 *
 * @param {string} path
 * @param {object} parameters
 */
function parsePathAndParametersToString(initialUrl, parameters) {
  let result = { url: '', params: {} };
  const { path, body, query } = parameters;
  let url = initialUrl;
  url = parsePath(path, url, result);
  result.url = '`' + `${url}` + '`';
  result = parseQueries(query, result);
  result = parseBodies(body, result);
  return result;
}

parsePathAndParametersToString('/demand/type/{id}', {
  body: [],
  path: [
    {
      type: 'number',
      description: 'id',
      required: true,
      enum: [],
    },
  ],
  query: [],
});

function parsePath(path, url, result) {
  if (path.length > 0) {
    let paths = [];
    path.forEach((pathItem) => {
      const { type, description } = pathItem;
      url = url.replace(`{${description}}`, '${' + description + '}');
      paths.push(`* @param {${type}} params.${description} - path`);
    });
    result.params.paths = paths.join('\n');
  }
  return url;
}

function parseBodies(body, result) {
  if (body.length > 0) {
    let bodyParams = [];
    bodyParams.push(` * @param {object} params.body - 请求体`);
    // let typedefs = {};
    global.typedefs = {};
    let params = [];
    body.forEach((bodyItem) => {
      if (typeof bodyItem !== 'object') {
        return;
      }
      for (let i in bodyItem) {
        const param = parseParameter(bodyItem[i], i);
        // FIXME: 此处解析会栈溢出，需修复
        // if (bodyItem && bodyItem[i] === undefined) {
        //   console.log('====================================');
        //   console.log(bodyItem[i], '---', bodyItem);
        //   console.log('====================================');
        // }
        params.push(param);
        const { type, itemType, description } = param;
        const paramType = type === 'array' ? `[${itemType}]` : type;
        bodyParams.push(
          `* @param {${paramType}} params.body.${i} - ${description}`
        );
      }
    });
    fs.writeFileSync('params.js', JSON.stringify(params, null, 2));
    result.params.bodies = bodyParams.join('\n ');
  }
  return result;
}

function parseQuery(query) {
  const { type, name, description, valueType } = query;
  const parsedType = type !== 'array' ? type : `[${valueType.type}]`;
  return `* @param {${parsedType}} param.query.${name} - ${description}`;
}

function parseQueries(query, result) {
  if (query.length > 0) {
    let queryParams = [];
    queryParams.push(`* @param {object} params.query - 请求查询参数`);
    query.forEach((queryItem) => {
      const parsedQuery = parseQuery(queryItem);
      queryParams.push(parsedQuery);
    });
    result.params.queries = queryParams.join('\n');
  }
  return result;
}

// fs.writeFileSync('defs.js', JSON.stringify(global.typedefs, null, 2));

function parseParameter(param, paramName, typedefs) {
  const { type } = param;
  if (param === undefined) {
    return {};
  }
  const parser = parserMap[type] || parseObjectParameter;

  return parser(param, paramName, typedefs);
}

function parseArrayParameter(param, paramName, typedefs) {
  const { type, valueType, description } = param;
  const name = paramName + 'Item';
  const { itemType } = valueType;
  const parser = parserMap[itemType] || parseObjectParameter;
  const result = parser(valueType, name, typedefs);

  global.typedefs[name] = { name, result };
  return { paramName, type, itemType: name, description };
}

function parseObjectParameter(param, paramName, typedefs) {
  if (!param) {
    return null;
  }
  let result = {};
  const keys = Object.keys(param);
  try {
    keys.forEach((key) => {
      const value = param[key];
      const { type } = value;
      // const parser = parserMap(value, key);
      const parser = parserMap[type] || parseObjectParameter;
      result[key] = parser(value, key);
    });
    // global.typedefs[paramName] = result;
    global.typedefs[paramName] = { name: paramName, result };
    return result;
  } catch (err) {
    console.log(err);
    return {};
  }
}

function parseBasicParameter(param, paramName) {
  const { type, description } = param;
  return { paramName, type, description };
}

function parseMethodParameters(parameters) {
  const { body, query } = parameters;
  let result = '{}';
  if (query.length > 0) {
    result = '{ params: { ...params.query }';
  }
  if (body.length > 0) {
    if (result !== '{}') {
      result += ', ';
    } else {
      result = '';
    }
    result += '{ ...params.body }';
  }
  return result;
}

module.exports = {
  parseApiInfo,
  parseParameter,
  parsePathAndParametersToString,
  parseQuery,
  parseQueries,
  parseBodies,
};
