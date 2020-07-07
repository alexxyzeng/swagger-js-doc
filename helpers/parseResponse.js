const fs = require('fs');
const {
  isValidDefinitionType,
  parseDefinitionType,
} = require('./parseDefinitionType');
const { parseToDefs } = require('./parseToDef');
const { parseParamType } = require('./parseParameters');
const { parseParameter } = require('./parseParamToString');
// const definitions

function parseResponse(responses, definitions, responseName) {
  const { 200: successResponse } = responses;
  const { schema } = successResponse;
  const definition = getResponseDefinition(schema, definitions);
  if (!definition) {
    return;
  }
  if (!global.typedefs) {
    global.typedefs = {};
  }
  const parsedParams = parseParamType(definition);
  parseParameter(parsedParams, responseName, {});
  const responseData = global.typedefs[responseName];
  const mock = parseResponseToMockData(responseData.result, { code: 200 }, global.typedefs);
  const response = parseToDefs(global.typedefs);
  // TODO: 解析mock数据
  return { mock, response };
}

function getResponseDefinition(schema, definitions) {
  const definitionType = parseDefinitionType(schema);
  const definition = definitions[definitionType];
  // FIXME: 递归查询多重definition
  const { properties = {} } = definition;
  Object.entries(properties).forEach(([key, value]) => {
    if (isValidDefinitionType(value)) {
      const subDefinitionType = parseDefinitionType(value);
      if (subDefinitionType === definitionType) {
        // console.log(items, '--- items')
        // console.log(schema);
        // console.log(definition, '----- definition')
        return;
      }
      const subDefinition = getResponseDefinition(value, definitions);
      const { description } = value;
      definition.properties[key] = { description, ...subDefinition };
    }
    const { type, items } = value;
    if (type === 'array' && isValidDefinitionType(items)) {
      const subDefinitionType = parseDefinitionType(items);
      if (subDefinitionType === definitionType) {
        // console.log('====================================');
        // console.log(definition, '----- definition ----', definitionType)
        // console.log(value);
        // console.log('====================================');
        return;
      }
      const subDefinition = getResponseDefinition(items, definitions);
      const { description } = value;
      definition.properties[key] = {
        ...value,
        description,
        items: subDefinition,
      };
    }
  });
  return definition;
}

function parseMockStringData({ paramName }, defaultValue) {
  if (defaultValue[paramName]) {
    return defaultValue[paramName];
  }
  return '';
}

function parseMockNumberData({ paramName }, defaultValue) {
  if (defaultValue[paramName]) {
    return defaultValue[paramName];
  }
  return 1;
}

function parseMockBooleanData({ paramName }, defaultValue) {
  if (defaultValue[paramName]) {
    return defaultValue[paramName];
  }
  return true;
}


function parseMockObjectData(param, defaultValue, definitions) {
  fs.writeFileSync('aaa.js', JSON.stringify(param, null, 2));
  fs.appendFileSync('aaa.js', '\n\n' + JSON.stringify(definitions, null, 2));
  const { itemType } = param;
  const definition = definitions[itemType];
  if (!definition) {
    console.log(param, '---- no defintiion');
    return {};
  }
  const item = definition.result;
  return parseResponseToMockData(item, defaultValue, definitions);
}

function parseMockArrayData(param, defaultValue, definitions) {
  const { itemType } = param;
  const parser = parseMockDataDict[itemType] || parseMockObjectData;
  return [parser(param, defaultValue, definitions)];
}

const parseMockDataDict = {
  string: parseMockStringData,
  number: parseMockNumberData,
  boolean: parseMockBooleanData,
  array: parseMockArrayData
};


function parseResponseToMockData(result, defaultValue = {}, definitions) {
  let mockData = {};
  for (let i in result) {
    const item = result[i];
    if (!item) {
      continue;
    }
    const { type } = item;
    const parser = parseMockDataDict[type] || parseResponseToMockData;
    mockData[i] = parser(item, defaultValue, definitions);
  }
  return mockData;
}



module.exports = {
  parseResponse,
  getResponseDefinition,
};

