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
  API_SERVICE_DEFINITION
} = require('./const/tpl');

const [baseUrl] = process.argv.slice(2);
const { data: result } = require('./data');
const tpl = fs.readFileSync('./tpl/service.js.tpl') + '';

const parserMap = {
  object: parseObjectParameter,
  array: parseArrayParameter,
  string: parseBasicParameter,
  number: parseBasicParameter,
  boolean: parseBasicParameter
};

let infos = '';
const base = baseUrl + swaggerUIPath + swaggerBasePath;
const { path, methods } = result;
for (let methodName in methods) {
  const method = methods[methodName];
  const { parameters, summary, operationId, tags, description = '' } = method;
  const tagStr = tags.join(',');
  const [tag] = tags;
  const link = `${base}${tag}/${operationId}`;
  // TODO: 增加对具体参数的生成
  // TODO: 增加自定义方法名
  const {
    url,
    params: { paths, bodies }
  } = parsePathAndParametersToString(path, parameters);
  let paramStr = [paths, bodies].filter(item => item !== undefined).join('\n');
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
    .replace(API_SERVICE_PARAM_PROPS_TPL, paramStr);

  infos += serviceInfo;
  infos += '\n';
}

/**
 *
 * @param {string} path
 * @param {object} parameters
 */
function parsePathAndParametersToString(initialUrl, parameters) {
  let result = { url: '', params: {} };
  const { path, body, query } = parameters;
  let url = initialUrl;
  if (path.length > 0) {
    let paths = [];
    path.forEach(pathItem => {
      const { type, description } = pathItem;
      url = url.replace(`{${description}}`, '${' + description + '}');
      paths.push(`* @param {${type}} params.${description} - path`);
    });
    result.url = '`' + `${url}` + '`';
    result.params.paths = paths.join('\n');
  }
  //  TODO: 增加对复杂类型的解析
  if (body.length > 0) {
    let bodyParams = [];
    bodyParams.push(` * @param {object} params.body - 请求体`);
    // let typedefs = {};
    global.typedefs = {};
    let params = [];
    body.forEach(bodyItem => {
      if (typeof bodyItem !== 'object') {
        return;
      }
      for (let i in bodyItem) {
        // const { type, description } = bodyItem[i];
        const param = parseParameter(bodyItem[i], i);
        params.push(param);
        // bodyParams.push(
        //   ` * @param {${type}} params.body.${i} - ${description}`
        // );
        const { type, itemType, description } = param;
        const paramType = type === 'array' ? `[${itemType}]` : type;
        bodyParams.push(
          `* @param {${paramType}} params.body.${i} - ${description}`
        );
      }
    });
    // fs.writeFileSync('params.js', JSON.stringify(params, null, 2));
    result.params.bodies = bodyParams.join('\n ');
  }

  //  TODO: 解析query
  return result;
}
// fs.writeFileSync('defs.js', JSON.stringify(global.typedefs, null, 2));
fs.appendFileSync('test.js', '\n' + infos);

function parseParameter(param, paramName, typedefs) {
  const { type } = param;
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
  keys.forEach(key => {
    const value = param[key];
    const { type } = value;
    // const parser = parserMap(value, key);
    const parser = parserMap[type] || parseObjectParameter;
    result[key] = parser(value, key);
  });
  // global.typedefs[paramName] = result;
  global.typedefs[paramName] = { name: paramName, result };
  return result;
}

function parseBasicParameter(param, paramName) {
  const { type, description } = param;
  return { paramName, type, description };
}
