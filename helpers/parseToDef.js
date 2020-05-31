const fs = require('fs');

const tpl = fs.readFileSync('./tpl/definition.js.tpl') + '';

const {
  API_DEFINITION_TYPE,
  API_DEFINITION_NAME,
  API_DEFINITION_PROPERTY,
} = require('../const/tpl');

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
      .replace(API_DEFINITION_TYPE, 'object')
      .replace(API_DEFINITION_NAME, key.trim());
    let parsedDefs = [];
    keys.forEach((key) => {
      const value = result[key];
      const parsedDef = parseToDef(value, key);
      parsedDefs.push(parsedDef);
    });
    typeName = typeName.replace(
      API_DEFINITION_PROPERTY,
      parsedDefs.join('\n ')
    );
    parsedResult.push(typeName);
  });
  return parsedResult.join('\n\n');
}

function parseToDef(value, key) {
  if (!value) {
    return '';
  }
  const { type } = value;
  const parser = parserMap[type] || parseObjectTypeToProp;
  return parser(value, key);
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

function parseObjectTypeToProp(typeDef, key) {
  // TODO: 增加对object类型的解析
  return parseBasicTypeToProp({ ...typeDef, type: key, paramName: key });
}

module.exports = {
  parseToDefs,
  parseToDef,
};
