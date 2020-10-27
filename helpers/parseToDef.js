const fs = require('fs');
const path = require('path');
const tpl =
  fs.readFileSync(path.resolve(__dirname + '/tpl/definition.js.tpl')) + '';

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

function parseToDefs(defs, needPrefix) {
  let parsedResult = [];
  // console.log(defs, '---- defs');
  fs.writeFileSync('defs.json', JSON.stringify(defs, null, 2));
  const defList = Object.entries(defs);
  defList.forEach((def) => {
    const [key, value] = def;
    const { result } = value;
    const keys = Object.keys(result);
    let typeName = tpl
      .replace(API_DEFINITION_TYPE, 'object')
      .replace(API_DEFINITION_NAME, key.trim());
    let parsedDefs = [];
    
    const isResponse = key.endsWith('Response');
    const showPrefix = needPrefix && isResponse;
    const prefix = key.replace('Response', '');
    keys.forEach((key) => {
      const value = result[key];
      const prefixStr = showPrefix ? prefix : undefined;
      const parsedDef = parseToDef(value, key, prefixStr);
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

function parseToDef(value, key, prefix) {
  if (!value) {
    return '';
  }
  const { type } = value;
  const parser = parserMap[type] || parseObjectTypeToProp;
  const keyList = Array.from(key);
  const [initialKey, ...restKey] = keyList;
  const finalKey = !type && prefix ? `${prefix}${initialKey.toUpperCase()}${restKey.join('')}` : key;
  return parser(value, finalKey);
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
