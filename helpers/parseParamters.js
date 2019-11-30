const fs = require('fs');
const {
  parseDefinitionType,
  parseDefinition,
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
      if (isValidDefinitionType(schema)) {
        const definitionType = parseDefinitionType(schema);
        //  FIXME: 循环有相同类型，导致有递归越界
        const notOkList = ['设施分类', '权限表'];
        if (notOkList.includes(definitionType)) {
          fs.writeFileSync('./test.js', JSON.stringify(api));
          return;
        }
        // TODO: 增加对参数类型的整理
        // const definition = parseDefinition(definitionType, definitions);
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
