function parseDefinitionType(data) {
  if (!data || !data.hasOwnProperty('$ref')) {
    throw new Error('data to parse is invalid object');
  }
  const $ref = data['$ref'];
  return $ref.replace('#/definitions/', '');
}

//  TODO: 根据definitions生成对应的对象数据
