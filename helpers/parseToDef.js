const fs = require('fs');

const tpl = fs.readFileSync('./tpl/definition.js.tpl') + '';
const { data } = require('../defs');

const parserMap = {
  string: parseBasicTypeToProp,
  number: parseBasicTypeToProp,
  boolean: parseBasicTypeToProp,
  array: parseArrayTypeToProp,
};

// TODO: 优化冗余数据
let parsedResult = [];
const defList = Object.entries(data);
defList.forEach((def) => {
  const [key, value] = def;
  const { name, result } = value;
  const keys = Object.keys(result);
  let typeName = tpl
    .replace('<%= DefinitionType %>', 'object')
    .replace('<%= DefinitionName %>', name);
  let parsedDef = [];
  keys.forEach((key) => {
    const value = result[key];
    const { type } = value;
    const parser = parserMap[type] || parseObjecTypeToProp;
    parsedDef.push(parser(value));
  });
  typeName = typeName.replace(
    '<%= DefinitionPropropety %',
    parsedDef.join('\n ')
  );
  parsedResult.push(typeName);
});

fs.writeFileSync('test.js', parsedResult.join('\n\n'));

// TODO: 完善对应的解析
function parseBasicTypeToProp(typeDef) {
  const { paramName, type, description = '' } = typeDef;
  return `* @property {${type}} ${paramName} ${description}`;
}

function parseArrayTypeToProp(typeDef) {
  const { paramName, type, itemType } = typeDef;
  return `* @property {[${itemType}]} ${paramName}`;
}

function parseObjecTypeToProp(typeDef) {
  // console.log(typeDef);
  return parseBasicTypeToProp(typeDef);
}
