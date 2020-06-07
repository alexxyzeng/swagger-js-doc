const fs = require('fs');
const {
  parseDefinitionType,
  parseDefinition,
  isValidDefinitionType,
} = require('./parseDefinitions');

function parseParams(api, definitions) {
  const { parameters, summary, consumes, operationId, tags, responses } = api;
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
      // if (notOkList.includes(definitionType)) {
      //   return;
      // }
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
    responses,
  };
}

function parseSchemaParamType(param) {
  const { description, required, schema, name } = param;
  const { type, items } = schema;
  return parseParamType({
    type,
    name,
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
    name,
    schema,
    required = false,
    items,
    description = '',
    enum: valueEnum = {},
    definitionType,
  } = param;
  let paramType = type;
  if (!type && schema) {
    return parseSchemaParamType(param);
  }
  if (!type && typeof param === 'object') {
    paramType = 'object';
  }
  const parsedEnum = Object.values(valueEnum);
  if (
    paramType === 'integer' ||
    paramType === 'float' ||
    paramType === 'double'
  ) {
    return { type: 'number', name, description, required, enum: parsedEnum };
  }
  if (type === 'array') {
    return parseArrayParamType(
      items,
      paramType,
      required,
      definitionType,
      description,
      name
    );
  }
  // TODO: 解析enum
  // TODO: 解析object
  const hasProperties = Object.prototype.hasOwnProperty.call(
    param,
    'properties'
  );
  if (type === 'object' && hasProperties) {
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
  return {
    type,
    name,
    description,
    enum: parsedEnum,
    definitionType,
    required,
  };
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
  // FIXME: items只包括type
  // FIXME: items不存在
  let parsedItems = null;
  if (Object.prototype.hasOwnProperty.call(items, 'properties')) {
    parsedItems = parseParamType({ ...items, type: 'object' });
  } else {
    parsedItems = parseParamType({ ...items, required, definitionType });
  }
  console.log(parsedItems, '--- parsed items');
  return {
    type,
    valueType: { type: 'object', ...parsedItems },
    required,
    definitionType,
    description,
    name,
  };
}
