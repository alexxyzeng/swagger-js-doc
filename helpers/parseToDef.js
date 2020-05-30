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

/**
 * 
 * [
  'code',
  {
    type: 'number',
    name: undefined,
    description: '业务响应状态',
    required: false,
    enum: []
  }
] --- def ---- * @property {number} code 业务响应状态
====================================
====================================
[
  'data',
  {
    workorderStatistics: {
      type: 'array',
      valueType: [Object],
      required: false,
      definitionType: undefined,
      description: '工单权限及数量统计',
      name: undefined
    }
  }
] --- def ---- * @property {object} data
====================================
====================================
[
  'message',
  {
    type: 'string',
    name: undefined,
    description: '消息',
    enum: [],
    definitionType: undefined
  }
] --- def ---- * @property {string} message 消息
====================================
====================================
[
  'traceId',
  {
    type: 'string',
    name: undefined,
    description: '用于链路追踪的ID',
    enum: [],
    definitionType: undefined
  }
] --- def ---- * @property {string} traceId 用于链路追踪的ID
 */

function parseToResponseDef(response) {
  let parsedResult = [];
  const defList = Object.entries(response);
  defList.forEach((def) => {
    const [key, value] = def;
    let typeName = tpl
      .replace('<%= DefinitionType %>', 'object')
      .replace('<%= DefinitionName %>', key);
    let parsedDefs = [];
    parsedDefs.push(parseToDef(value));
    console.log('====================================');
    console.log(def, '--- def ----', parseToDef({ ...value, paramName: key }));
    console.log('====================================');
    typeName = typeName.replace(
      '<%= DefinitionPropropety %>',
      parsedDefs.join('\n')
    );
    parsedResult.push(typeName);
  });
  return parsedResult.join('\n\n');
}

module.exports = {
  parseToDefs,
  parseToDef,
  parseToResponseDef,
};
