const fs = require('fs');

const tpl = fs.readFileSync('./tpl/definition.js.tpl') + '';

const parserMap = {
  string: parseBasicTypeToProp,
  number: parseBasicTypeToProp,
  boolean: parseBasicTypeToProp,
  array: parseArrayTypeToProp,
};

function parseToDefs(defs) {
  let parsedResult = [];
  const defList = Object.entries(defs);

  defList.forEach((def) => {
    const [key, value] = def;
    const { result } = value;
    const keys = Object.keys(result);
    let typeName = tpl
      .replace('<%= DefinitionType %>', 'object')
      .replace('<%= DefinitionName %>', key.trim());
    let parsedDefs = [];
    keys.forEach((key) => {
      const value = result[key];
      const parsedDef = parseToDef(value);
      parsedDefs.push(parsedDef);
    });
    typeName = typeName.replace(
      '<%= DefinitionPropropety %>',
      parsedDefs.join('\n')
    );
    parsedResult.push(typeName);
  });
  return parsedResult.join('\n\n');
}

function parseToDef(value) {
  const { type } = value;
  console.log('====================================');
  console.log(value);
  console.log('====================================');
  const parser = parserMap[type] || parseObjecTypeToProp;
  return parser(value);
}

// TODO: 完善对应的解析
function parseBasicTypeToProp(typeDef) {
  const { paramName, type, description = '' } = typeDef;
  return `* @property {${type}} ${paramName} ${description}`;
}

function parseArrayTypeToProp(typeDef) {
  const { paramName, itemType } = typeDef;
  return `* @property {[${itemType}]} ${paramName}`;
}

function parseObjecTypeToProp(typeDef) {
  // TODO: 增加对object类型的解析
  return parseBasicTypeToProp({ ...typeDef, type: 'object' });
}

function parseToResponseDef(response) {
  let parsedResult = [];
  const defList = Object.entries(response);
  // TODO: 1. 解析出顶层definition
  // TODO: 2. 解析出单个definition
  //   defList.forEach((def) => {
  //     const [key, value] = def;
  //     const { type } = value;
  //     let typeName = tpl
  //       .replace('<%= DefinitionType %>', 'object')
  //       .replace('<%= DefinitionName %>', key.trim());
  //     let parsedDefs = [];
  //     if (!type) {
  //       parsedDefs.push(parseToDef(value));
  //     }
  //     typeName = typeName.replace(
  //       '<%= DefinitionPropropety %>',
  //       parsedDefs.join('\n')
  //     );
  //     parsedResult.push(typeName);
  //   });
  return parsedResult.join('\n\n');
}

module.exports = {
  parseToDefs,
  parseToDef,
  parseToResponseDef,
};
