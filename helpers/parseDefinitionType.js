function parseDefinitionType(data) {
  const { $ref = '' } = data;
  return $ref.replace('#/definitions/', '');
}

function isValidDefinitionType(data) {
  return Object.prototype.hasOwnProperty.call(data, '$ref');
}

module.exports = {
  parseDefinitionType,
  isValidDefinitionType,
};
