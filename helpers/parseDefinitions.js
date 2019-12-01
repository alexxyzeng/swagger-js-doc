const fs = require('fs');

function parseDefinitionType(data) {
  const { $ref = '' } = data;
  return $ref.replace('#/definitions/', '');
}

function parseDefinitions(definitions) {
  let result = [];
  let count = 0;
  const keys = Object.keys(definitions);
  keys.forEach(key => {
    console.log('====================================');
    console.log(key);
    console.log('====================================');
    result.push(parseDefinitionProps(definitions[key], key, definitions));
  });
  return result;
}

function isValidDefinitionType(data) {
  if (!data || typeof data !== 'object') {
    return false;
  }
  return data.hasOwnProperty('$ref');
}

function parseDefinition(type, definitions) {
  const definition = definitions[type];
  if (!definition) {
    return null;
  }
  return parseDefinitionProps(definition, type, definitions);
}

function parseDefinitionProps(object, objectType, definitions) {
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
      result[i] = parseDefinitionProps(prop, i, definitions);
    }
  }
  return result;
}

function parseRef(refType, definitions) {
  //  1.先找到对于的definition
  //  2.遍历该definition的所有key，找到第一层props
  //  3.对每个props进行判断，如果是对象，继续parseProp
  const definition = definitions[refType];
  if (!definition) {
    return {};
  }
  let result = {};
  for (let i in definition) {
    const prop = definition[i];
    if (isValidDefinitionType(prop)) {
      const refType = parseDefinitionType(prop);
      result[i] = parseRef(refType, definitions);
      continue;
    }
    if (typeof prop === 'object') {
      result[i] = parseDefinitionProps(prop, i, definitions);
    }
  }
  return result;
}

module.exports = {
  parseDefinitionType,
  isValidDefinitionType,
  parseDefinitions,
  parseDefinition
};
