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
  global.callCount = {};
  const mock = parseResponseToMockData(responseData.result, { code: 200 }, global.typedefs);
  const response = parseToDefs(global.typedefs);
  return { mock, response };
}

function getResponseDefinition(schema, definitions) {
  const definitionType = parseDefinitionType(schema);
  const definition = definitions[definitionType];
  const { properties = {} } = definition;
  Object.entries(properties).forEach(([key, value]) => {
    if (isValidDefinitionType(value)) {
      const subDefinitionType = parseDefinitionType(value);
      if (subDefinitionType === definitionType) {
        console.log(items, '--- items');
        console.log(schema);
        console.log(definition, '----- definition');
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

function isEmpty(param) {
  return param === null || param === undefined;
}

function parseMockStringData({ paramName }, defaultValue) {
  if (!isEmpty(defaultValue[paramName])) {
    return defaultValue[paramName];
  }
  return 'string';
}

function parseMockNumberData({ paramName }, defaultValue) {
  if (!isEmpty(defaultValue[paramName])) {
    return defaultValue[paramName];
  }
  return 1;
}

function parseMockBooleanData({ paramName }, defaultValue) {
  if (!isEmpty(defaultValue[paramName])) {
    return defaultValue[paramName];
  }
  return true;
}


function parseMockObjectData(param, defaultValue, definitions) {
  const { itemType, paramName } = param;
  const definition = definitions[itemType];
  if (!global.callCount[paramName]) {
    global.callCount[paramName] = 1;
  } else {
    global.callCount[paramName] += 1;
  }
  if (!definition || global.callCount[paramName] >= 5) {
    return {};
  }
  const item = definition.result;
  return parseResponseToMockData(item, defaultValue, definitions);
}

function parseMockArrayData(param, defaultValue, definitions) {
  const { itemType, paramName } = param;
  if (!global.callCount[paramName]) {
    global.callCount[paramName] = 1;
  } else {
    global.callCount[paramName] += 1;
  }
  if (global.callCount[paramName] >= 5) {
    return [];
  }
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

