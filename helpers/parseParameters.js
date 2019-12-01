const fs = require('fs');
const {
  parseDefinitionType,
  parseDefinition,
  isValidDefinitionType
} = require('./parseDefinitions');

function parseParams(api, definitions) {
  const { parameters, summary, consumes, operationId, tags } = api;
  const parsedParameters = { body: [], path: [], query: [] };
  parameters.forEach(parameter => {
    const { in: paramIn, schema } = parameter;
    if (!parsedParameters[paramIn]) {
      return;
    }
    // const param = parseParam(parameter);
    let param = null;
    if (isValidDefinitionType(schema)) {
      const definitionType = parseDefinitionType(schema);
      const notOkList = ['设施分类', '权限表'];
      if (notOkList.includes(definitionType)) {
        return;
      }
      const definition = parseDefinition(definitionType, definitions);
      param = parseParamType(definition);
      // console.log(definition);
    } else {
      param = parseParamType(parameter);
    }
    // console.log('====================================');
    // console.log(param);
    // console.log('====================================');
    parsedParameters[paramIn].push(param);
  });
  return {
    parameters: parsedParameters,
    summary,
    consumes,
    operationId,
    tags
  };
}

// integer/strring/array/object/enum/boolean
function parseParamType(param) {
  if (!param) {
    return null;
  }
  const {
    type,
    required = false,
    items,

    description = '',
    enum: valueEnum = {}
  } = param;
  const parsedEnum = Object.values(valueEnum);
  if (type === 'integer' || type === 'float' || type === 'double') {
    return { type: 'number', description, required, enum: parsedEnum };
  }
  if (type === 'array') {
    // const { type: itemType } = items;
    // TODO: 增加对复杂数组类型的解析
    let parsedItems = null;
    if (items.hasOwnProperty('properties')) {
      parsedItems = parseParamType({ ...items, type: 'object' });
    } else {
      parsedItems = parseParamType(items);
    }
    return { type, valueType: parsedItems, required };
  }
  // TODO: 解析enum
  // TODO: 解析object
  if (type === 'object') {
    const { properties, required = {} } = param;
    const requireStatus = Object.values(required).reduce((a, b) => {
      return (a[b] = 1);
    }, {});
    let result = {};
    for (let i in properties) {
      const property = properties[i];
      const propertyFinal = {
        ...property,
        required: requireStatus[i] || false
      };
      result[i] = parseParamType(propertyFinal);
    }
    return result;
  }
  return { type, description, enum: parsedEnum };
}

module.exports = {
  parseParams
};
