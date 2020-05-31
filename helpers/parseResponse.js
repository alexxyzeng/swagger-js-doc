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
  const definition = getResponseDefinition(responses, definitions);
  if (!definition) {
    return;
  }
  if (!global.typedefs) {
    global.typedefs = {};
  }
  fs.writeFileSync('response.js', JSON.stringify(definition, null, 2));
  parseParameter(parseParamType(definition), responseName, {});
  console.log('====================================');
  console.log(global.typedefs, '---- global typedefs');
  console.log('====================================');
  const response = parseToDefs(global.typedefs);
  return response;
}

function getResponseDefinition(responses, definitions) {
  const { 200: successResponse } = responses;
  const { schema } = successResponse;
  const definitionType = parseDefinitionType(schema);
  const definition = definitions[definitionType];
  console.log(definition, '--- def');
  const { properties } = definition;
  Object.entries(properties).forEach(([key, value]) => {
    if (isValidDefinitionType(value)) {
      const subDefinition = definitions[parseDefinitionType(value)];
      const { description } = value;
      definition.properties[key] = { description, ...subDefinition };
    }
  });
  return definition;
}

module.exports = {
  parseResponse,
  getResponseDefinition,
};
