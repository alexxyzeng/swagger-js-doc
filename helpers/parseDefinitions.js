const fs = require('fs');

function parseDefinitionType(data) {
  if (!isValidDefinitionType(data)) {
    console.log(data);
    throw new Error('data to parse is invalid object');
  }
  const { $ref = '' } = data;
  return $ref.replace('#/definitions/', '');
}

function parseDefinitions(definitions) {
  let result = {};
  let count = 0;
  for (let i in definitions) {
    count += 1;
    result[i] = parseProps(definitions[i], i, definitions);
  }
  return result;
}

//  TODO: 根据definitions生成对应的对象数据

function getDefinition(definitions, type) {
  return definitions[type];
}

function isValidDefinitionType(data) {
  if (!data || !data.hasOwnProperty('$ref')) {
    return false;
  }
  return true;
}

module.exports = {
  parseDefinitionType,
  getDefinition,
  isValidDefinitionType,
  parseDefinitions
};

function parseProps(object, objectType, definitions) {
  //  遍历所有的props
  //  如果是ref，调用parseRef
  //  如果不是ref，判断具体类型
  if (!object || typeof object !== 'object') {
    return object;
  }
  let result = {};
  for (let i in object) {
    const prop = object[i];
    if (isValidDefinitionType(prop)) {
      const refType = parseDefinitionType(prop);
      result[i] = parseRef(refType, definitions);
      continue;
    }
    if (typeof object === 'object') {
      result[i] = parseProps(prop, i, definitions);
    }
  }
  return result;
}

function parseRef(refType, definitions) {
  //  1.先找到对于的definition
  //  2.遍历该definition的所有key，找到第一层props
  //  3.对每个props进行判断，如果是对象，继续parseProp
  const definition = definitions[refType];
  console.log(definition);
  if (!definition) {
    return {};
  }
  let result = {};
  for (let i in definition) {
    console.log(i);
    const prop = definition[i];
    if (isValidDefinitionType(prop)) {
      const refType = parseDefinitionType(prop);
      result[i] = parseRef(refType, definitions);
      continue;
    }
    if (typeof prop === 'object') {
      result[i] = parseProps(prop, i, definitions);
    }
  }
  return result;
}
