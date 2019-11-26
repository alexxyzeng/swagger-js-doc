function parseDefinitionType(data) {
  if (!isValidDefinitionType(data)) {
    console.log(data);
    throw new Error('data to parse is invalid object');
  }
  const { $ref = '' } = data;
  return $ref.replace('#/definitions/', '');
}

//  TODO: 根据definitions生成对应的对象数据
function parseDefinition(definition) {}

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
  isValidDefinitionType
};
