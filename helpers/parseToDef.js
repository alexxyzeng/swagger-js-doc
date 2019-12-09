const fs = require('fs');

// const tpl = fs.readFileSync('../tpl/definition.js.tpl') + '';
const { defs } = require('../defs');

const parserMap = {
  string: parseBasicTypeToProp,
  number: parseBasicTypeToProp,
  boolean: parseBasicTypeToProp,
  array: parseArrayTypeToProp
};

// TODO: 优化冗余数据
let parsedResult = [];
defs.forEach(def => {
  const { name, result } = def;
  const keys = Object.keys(result);
  let parsedDef = [];
  keys.forEach(key => {
    const value = result[key];
    const { type } = value;
    const parser = parserMap[type] || parseObjecTypeToProp;
    parsedDef.push(parser(value));
  });
  parsedResult.push(parsedDef);
});

console.log(parsedResult);

// TODO: 完善对应的解析
function parseBasicTypeToProp(typeDef) {
  const { paramName, type, description = '' } = typeDef;
  return `@property ${type} ${paramName} ${description}`;
}

function parseArrayTypeToProp(typeDef) {
  const { paramName, type, itemType } = typeDef;
  return `@property [${itemType}] ${paramName}`;
}

function parseObjecTypeToProp(typeDef) {
  // console.log(typeDef);
  console.log('====================================');
  console.log(typeDef);
  console.log('====================================');
  return parseBasicTypeToProp(typeDef);
}
