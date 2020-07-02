function parseEnumStrToDef(enumStr) {
  // const 
  const enumDef = enumStr.replace(/^[\u4e00-\u9fa5 -a-zA-Z0-9]+/, '')
  const description = enumStr.replace(enumDef, '')
  const enumArr = parseEnumDescToEnumArr(enumDef)
  return {
    description,
    enumArr,
    enumDef
  }
}

function parseEnumDescToEnumArr(enumDesc) {
  const enumArr = enumDesc.replace('{', '').replace('}', '').split(', ').map(enumItem => {
    const [desc, enumInfo] = enumItem.split('=')
    const [enumKey, enumValue] = enumInfo.split('-')
    return {
      desc,
      enumKey,
      enumValue
    }
  })
  return enumArr
}

module.exports = {
  parseEnumStr: parseEnumStrToDef
}