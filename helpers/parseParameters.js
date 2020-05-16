const fs = require('fs');
const {
  parseDefinitionType,
  parseDefinition,
  isValidDefinitionType,
} = require('./parseDefinitions');

function parseParams(api, definitions) {
  const { parameters, summary, consumes, operationId, tags } = api;
  const parsedParameters = { body: [], path: [], query: [] };
  parameters.forEach((parameter) => {
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
    parsedParameters[paramIn].push(param);
  });
  return {
    parameters: parsedParameters,
    summary,
    consumes,
    operationId,
    tags,
  };
}

function parseSchemaParamType(param) {
  const { description, required, schema } = param;
  const { type, items } = schema;
  return parseParamType({
    type,
    required,
    description,
    items,
    definitonType: '',
  });
}

// integer/strring/array/object/enum/boolean
function parseParamType(param = {}) {
  if (!param) {
    return null;
  }
  const {
    type,
    schema,
    required = false,
    items,
    description = '',
    enum: valueEnum = {},
    definitionType,
    name,
  } = param;
  if (!type && schema) {
    return parseSchemaParamType(param);
  }
  const parsedEnum = Object.values(valueEnum);
  if (type === 'integer' || type === 'float' || type === 'double') {
    return { type: 'number', name, description, required, enum: parsedEnum };
  }
  if (type === 'array') {
    return parseArrayParamType(
      items,
      type,
      required,
      definitionType,
      description,
      name
    );
  }
  // TODO: 解析enum
  // TODO: 解析object
  if (
    type === 'object' ||
    Object.prototype.hasOwnProperty.call(param, 'properties')
  ) {
    const { properties, required = {} } = param;
    const requireStatus = Object.values(required).reduce((a, b) => {
      return (a[b] = 1);
    }, {});
    let result = {};
    for (let i in properties) {
      const property = properties[i];
      const propertyFinal = {
        ...property,
        required: requireStatus[i] || false,
      };
      result[i] = parseParamType(propertyFinal);
    }
    return result;
  }
  return { type, name, description, enum: parsedEnum, definitionType };
}

module.exports = {
  parseParams,
  parseParamType,
};
function parseArrayParamType(
  items,
  type,
  required,
  definitionType,
  description,
  name
) {
  let parsedItems = null;
  if (Object.prototype.hasOwnProperty.call(items, 'properties')) {
    parsedItems = parseParamType({ ...items, type: 'object' });
  } else {
    parsedItems = parseParamType({ ...items, required, definitionType });
  }
  return {
    type,
    valueType: { type: 'object', ...parsedItems },
    required,
    definitionType,
    description,
    name,
  };
}
