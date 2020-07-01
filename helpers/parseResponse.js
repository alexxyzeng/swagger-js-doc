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
  const response = parseToDefs(global.typedefs);
  return response;
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
        console.log(definition, '----- definition')
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
        console.log('====================================');
        console.log(definition, '----- definition ----', definitionType)
        console.log(value);
        console.log('====================================');
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

module.exports = {
  parseResponse,
  getResponseDefinition,
};
