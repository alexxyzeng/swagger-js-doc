const parserMap = {
  object: parseObjectParameter,
  array: parseArrayParameter,
  string: parseBasicParameter,
  number: parseBasicParameter,
  boolean: parseBasicParameter,
};

function parseParameter(param, paramName, typedefs, needPrefix, prefix) {
  if (param === undefined) {
    return {};
  }
  const { type } = param;
  const parser = parserMap[type] || parseObjectParameter;
  if (!parser) {
    return {};
  }
  return parser(param, paramName, typedefs, needPrefix, prefix);
}

function parseArrayParameter(param, paramName, typedefs) {
  const { type, valueType, description } = param;

  const { type: valueItemType, itemType } = valueType;
  const parsedType = itemType || valueItemType;

  // const name = global.typedefs[global.parentName] ? global.parentName + 'Item' : global.parentName;
  let name = '';
  if (parsedType) {
    name = paramName + 'Item';
  } else {
    name = global.typedefs[global.parentName] ? global.parentName + 'Item' : global.parentName;
  }
  // TODO: 查找对应
  if (!parsedType) {
    return { paramName, type, itemType: name, description };
  }
  global.parentName = paramName;
  if (['string', 'number', 'boolean'].includes(parsedType)) {
    return { paramName, type, itemType: parsedType, description };
  }
  const parser = parserMap[parsedType] || parseObjectParameter;

  // const name = paramName + 'Item';
  const result = parser(valueType, name, typedefs);
  if (global.typedefs) {
    global.typedefs[name] = { name, result, description };
  }
  return { paramName, type, itemType: name, description };
}

function parseObjectParameter(param, paramName, defs, needPrefix, prefix) {
  if (!param || typeof param !== 'object') {
    return null;
  }
  
  global.parentName = paramName;
  let result = {};
  const keys = Object.keys(param);
  if (paramName === 'files' && global) {
    console.log(param, '--- param');
  }
  try {
    keys.forEach((key) => {
      const value = param[key];
      const { type = 'object' } = value || {};
      if (!type) {
        return {};
      }
      const parser = parserMap[type] || parseObjectParameter;
      const hasPrefix = needPrefix !== undefined && needPrefix === true && type === 'object';
      const finalKey = hasPrefix ? `${prefix}${key}` : key;
      result[key] = parser(value, finalKey, undefined, false);
    });
    // global.typedefs[paramName] = result;
    if (global.typedefs && !global.typedefs[paramName]) {
      global.typedefs[paramName] = { name: paramName, result };
    }
    return result;
  } catch (err) {
    console.log(err);
    return {};
  }
}

function parseBasicParameter(param, paramName) {
  const { type, description } = param;
  return { paramName, type, description };
}

function parseMethodParameters(parameters) {
  const { body, query } = parameters;
  let result = '{}';
  if (query.length > 0) {
    result = '{ params: { ...params.query }}';
  }
  if (body.length > 0) {
    if (result !== '{}') {
      result += ', ';
    } else {
      result = '';
    }
    result += '{ ...params.body }';
  }
  return result;
}

module.exports = {
  parseParameter,
  parseBasicParameter,
  parseArrayParameter,
  parseObjectParameter,
  parseMethodParameters,
};