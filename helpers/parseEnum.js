const fs = require('fs');
const path = require('path');
const md5 = require('md5');

const enumTpl = fs.readFileSync(path.resolve(__dirname + '/tpl/enum.js.tpl')) + '';
const enumPropertyTpl = fs.readFileSync(path.resolve(__dirname + '/tpl/enumProperty.js.tpl')) + '';
const enumInfoTpl = fs.readFileSync(path.resolve(__dirname + '/tpl/enumInfo.js.tpl')) + '';

const {
  ENUM_DEFINITION_DESCRIPTION,
  ENUM_DEFINITION_NAME,
  ENUM_DEFINITION_PROPERTIES,
  ENUM_DEFINITION_INFOS,
  ENUM_DEFINITION_PROPERTY_TYPE,
  ENUM_DEFINITION_PROPERTY_NAME,
  ENUM_DEFINITION_PROPERTY_VALUE,
  ENUM_DEFINITION_PROPERTY_DESCRIPTION
} = require('../const/tpl');

function parseEnumStrToDef(param) {
  const { type, description: enumStr } = param;
  if (!enumStr) {
    return;
  }
  // const enumDef = enumStr.replace(/^[\u4e00-\u9fa5 -a-zA-Z0-9]+/, '');
  const [_, ...enumDesc] = enumStr.split('{');
  const enumDef = '{' + enumDesc.join(', ');
  const description = enumStr.replace(enumDef, '');
  if (!enumDef || !enumDef.includes('{') || !enumDef.includes('}')) {
    return;
  }
  const enumArr = parseEnumDescToEnumArr(enumDef, param);
  if (!global.enumNameConfig) {
    global.enumNameConfig = {};
  }
  let name = global.enumNameConfig[enumDef];
  if (!name) {
    global.enumNameConfig.hasNew = true;
    name = md5(enumDef);
    const finalName = `swagger_enum_${name}`
    if (!global.enumNameConfig[finalName]) {
      global.enumNameConfig[finalName] = {
        name: finalName,
        def: enumDef
      };
    }
  }
  if (!global.enumConfig) {
    global.enumConfig = {};
  }
  if (!global.enumConfig[name]) {
    global.enumConfig[name] = {
      type,
      name,
      description,
      enumArr,
    };
  }
}

function parseEnumDescToEnumArr(enumDesc, param) {
  const enumArr = enumDesc.replace('{', '').replace('}', '').split(', ').map(enumItem => {
    const [desc, enumInfo] = enumItem.split('=');
    const [enumKey, enumValue] = enumInfo.split('-');
    return {
      desc: desc.trim(),
      enumKey,
      enumValue
    };
  });
  return enumArr;
}

function parseEnumToString(enumInfo, nameConfig) {
  const { type, name, description, enumArr } = enumInfo;
  const defaultName = `swagger_enum_${name}`;
  const enumName = nameConfig[defaultName] ? nameConfig[defaultName].name || defaultName : defaultName;
  const enumProperties = [];
  const enumInfos = [];
  enumArr.forEach(enumItem => {
    const { desc, enumKey, enumValue } = enumItem;
    enumProperties.push(
      enumPropertyTpl.replace(ENUM_DEFINITION_PROPERTY_TYPE, type)
        .replace(ENUM_DEFINITION_NAME, enumName)
        .replace(ENUM_DEFINITION_PROPERTY_NAME, enumKey)
        .replace(ENUM_DEFINITION_PROPERTY_VALUE, enumValue)
        .replace(ENUM_DEFINITION_PROPERTY_DESCRIPTION, desc)
    );
    enumInfos.push(
      enumInfoTpl.replace(ENUM_DEFINITION_PROPERTY_DESCRIPTION, desc)
        .replace(ENUM_DEFINITION_PROPERTY_NAME, enumKey)
        .replace(ENUM_DEFINITION_PROPERTY_VALUE, enumValue)
    );
  });
  return enumTpl.replace(ENUM_DEFINITION_DESCRIPTION, description.trim())
    .replace(ENUM_DEFINITION_PROPERTIES, enumProperties.join('\n'))
    .replace(ENUM_DEFINITION_NAME, enumName)
    .replace(ENUM_DEFINITION_INFOS, enumInfos.join('\n'));
}

function parseEnumConfigToString(enumDict, nameConfig) {
  const enumList = Object.values(enumDict);
  return enumList.map(enumInfo => parseEnumToString(enumInfo, nameConfig)).join('\n\n');
}


module.exports = {
  parseEnumStrToDef,
  parseEnumToString,
  parseEnumConfigToString
};
