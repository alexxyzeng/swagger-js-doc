const fs = require('fs');
const process = require('process');
const path = require('path');

const { swaggerUIPath, swaggerBasePath } = require('../const/index');
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
} = require('../const/tpl');

const [baseUrl] = process.argv.slice(2);
// const apiInfo = require('./data');
const tpl =
  fs.readFileSync(path.resolve(__dirname + '/tpl/service.js.tpl')) + '';
const { parseToDefs } = require('./parseToDef');
const { parseResponse } = require('./parseResponse');
const {
  parseMethodParameters,
  parseParameter,
} = require('./parseParamToString');

function parseApiInfo(apiInfo, definitions) {
  let infos = '';
  const base = baseUrl + swaggerUIPath + swaggerBasePath;
  const { path, methods } = apiInfo;
  global.typedefs = {};
  for (let methodName in methods) {
    const method = methods[methodName];
    const {
      parameters,
      summary,
      operationId,
      tags,
      description = '',
      responses,
    } = method;
    const tagStr = tags.join(',');
    const [tag] = tags;
    const link = `${base}${tag}/${operationId}`;
    const responseName = `${operationId}Response`;
    // TODO: 增加自定义方法名
    const response = parseResponse(responses, definitions, responseName);
    const {
      url,
      // params,
      params: { paths, queries, bodies },
    } = parsePathAndParametersToString(path, parameters, operationId);
    let paramStr = [paths, queries, bodies]
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
      .replace(API_SERVICE_PARAM_TPL, paramStr.length === 0 ? '' : 'params')
      .replace(API_SERVICE_URL_TPL, url)
      .replace(API_SERVICE_METHOD_PARAM_TPL, methodParams)
      .replace(API_SERVICE_PARAM_PROPS_TPL, paramStr)
      .replace(API_SERVICE_RETURN_VALUE, responseName);
    infos += serviceInfo;
    infos += '\n';
  }
  const defStr = parseToDefs(global.typedefs);
  if (defStr.length > 0) {
    infos = defStr + '\n' + infos;
  }
  return infos;
}

/**
 *
 * @param {string} path
 * @param {object} parameters
 */
function parsePathAndParametersToString(initialUrl, parameters, operationId) {
  let result = { url: '', params: {} };
  const { path, body, query } = parameters;
  let url = initialUrl;
  url = parsePath(path, url, result);
  result.url = '`' + `${url}` + '`';
  result = parseQueries(query, result);
  result = parseBodies(body, result, operationId);
  return result;
}

function parsePath(path, url, result) {
  if (path.length > 0) {
    let paths = [];
    path.forEach((pathItem) => {
      const { type, description } = pathItem;
      url = url.replace(`{${description}}`, '${params.' + description + '}');
      paths.push(`* @param {${type}} params.${description} - path`);
    });
    result.params.paths = paths.join('\n');
  }
  return url;
}

function parseBodies(body, result, operationId) {
  if (body.length > 0) {
    let bodyParams = [];
    const [param] = body;
    if (!param) {
      return result;
    }
    const { type } = param;
    const paramName = `${operationId}Body`;
    const parsedParam = parseParameter(param, paramName, {});
    const { type: parsedParamType, itemType, description } = parsedParam;

    const paramType = parsedParamType === 'array' ? `[${itemType}]` : paramName;
    bodyParams.push(
      ` * @param {${paramType}} params.body - 请求体 ${description}`
    );

    result.params.bodies = bodyParams.join('\n');
  }
  return result;
}

function parseQuery(query) {
  const { type, name, description, valueType } = query;
  const parsedType = type !== 'array' ? type : `[${valueType.type}]`;
  return `* @param {${parsedType}} params.query.${name} - ${description}`;
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

module.exports = {
  parseApiInfo,
  parsePathAndParametersToString,
  parseQuery,
  parseQueries,
  parseBodies,
};
