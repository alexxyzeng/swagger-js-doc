const {
  parseDefinitionType,
  getDefinition,
  isValidDefinitionType
} = require('./parseDefinitions');

function parseParams(api, definitions) {
  const { parameters } = api;
  const parsedParameters = { body: [], path: [], query: [] };
  parameters.forEach(parameter => {
    const {
      name,
      description,
      required,
      type,
      items,
      in: paramIn,
      schema
    } = parameter;

    if (parsedParameters[paramIn]) {
      const { parsedType } = parseParamType(type, items);
      // console.log(type);
      // console.log(schema);
      // console.log('============');
      //  TODO: 增加对复杂类型的解析
      if (isValidDefinitionType(schema)) {
        const definitionType = parseDefinitionType(schema);
        const definition = definitions[definitionType];
        // console.log(definition);
        // console.log('============');
      }
      parsedParameters[paramIn].push({
        name,
        description,
        required,
        type: parsedType
      });
    }
  });
  // console.log('============');
  // console.dir(parsedParameters);
  // console.log('============');
}

// integer/strring/array/object/enum/boolean
function parseParamType(type, items) {
  if (type === 'integer' || type === 'float' || type === 'double') {
    return { type: 'number' };
  }
  if (type === 'array') {
    const { type: itemType } = items;
    const parsedItemType = parseParamType(itemType);
    return { type, format: parsedItemType };
  }
  // TODO: 解析enum
  // TODO: 解析object
  return { type };
}

module.exports = {
  parseParams
};
