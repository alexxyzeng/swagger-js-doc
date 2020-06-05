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
  console.log('====================================');
  console.log(responseName, '--- definition');
  console.log(schema)
  fs.writeFileSync('test.js', JSON.stringify(definition, null, 2))
  console.log('====================================');
  if (!definition) {
    return;
  }
  if (!global.typedefs) {
    global.typedefs = {};
  }
  const parsedParams = parseParamType(definition);
  console.log('====================================');
  console.log(parsedParams, '--- params');
  fs.appendFileSync('test.js', JSON.stringify(parsedParams, null, 2))
  console.log('====================================');
  parseParameter(parsedParams, responseName, {});
  // console.log('====================================');
  // console.log(global.typedefs);
  // console.log('====================================');
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
        // console.log(items, '--- items array')
        // console.log('====================================');
        // console.log(value);
        // console.log('====================================');
        console.log(value)
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
  // console.log('====================================');
  // console.log(definition.properties, '--- definition');
  // console.log('====================================');
  return definition;
}

module.exports = {
  parseResponse,
  getResponseDefinition,
};
