const fs = require('fs');
const {
  parseDefinitionType,
  parseDefinition,
  isValidDefinitionType
} = require('./parseDefinitions');

function parseParams(api, definitions) {
  const { parameters } = api;
  const parsedParameters = { body: [], path: [], query: [] };
  let result = {};
  parameters.forEach(parameter => {
    const { in: paramIn, schema } = parameter;
    if (!parsedParameters[paramIn]) {
      return;
    }
    // const param = parseParam(parameter);
    let param = null;
    if (isValidDefinitionType(schema)) {
      const definitionType = parseDefinitionType(schema);
      const notOkList = ['设施分类', '权限表'];
      if (notOkList.includes(definitionType)) {
        return;
      }
      const definition = parseDefinition(definitionType, definitions);
      param = parseParamType(definition);
      // console.log(definition);
    } else {
      param = parseParamType(parameter);
    }
    // console.log(param);
    // console.log('====================================');
    // console.log(param);
    // console.log('====================================');
  });
}

// integer/strring/array/object/enum/boolean
function parseParamType(param) {
  if (!param) {
    return null;
  }
  const { type, required, items, description } = param;

  if (type === 'integer' || type === 'float' || type === 'double') {
    return { type: 'number', description, required };
  }
  if (type === 'array') {
    // const { type: itemType } = items;
    // TODO: 增加对复杂数组类型的解析
    console.log('====================================');
    console.log(items);
    console.log('====================================');
    // const parsedItemType = parseParamType(itemType);
    // return { type, format: parsedItemType, reuired };
  }
  // TODO: 解析enum
  // TODO: 解析object
  if (type === 'object') {
    const { properties, required = {} } = param;
    const requireStatus = Object.values(required).reduce((a, b) => {
      return (a[b] = 1);
    }, {});
    let result = {};
    for (let i in properties) {
      const property = properties[i];
      const propertyFinal = {
        ...property,
        required: requireStatus[i] || false
      };
      result[i] = parseParamType(propertyFinal);
    }
    // console.log('====================================');
    // console.log(properties);
    // console.log('----------------------------');
    // console.log(result);
    // console.log('====================================');
    // fs.appendFileSync('test.js', JSON.stringify(result));
    return result;
  }
  return { type, description };
}

function parseParam(param) {}

module.exports = {
  parseParams
};
