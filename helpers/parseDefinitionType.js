function parseDefinitionType(data) {
  const { $ref = '' } = data;
  return $ref.replace('#/definitions/', '');
}

module.exports = {
  parseDefinitionType,
};
