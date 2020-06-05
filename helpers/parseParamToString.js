const parserMap = {
  object: parseObjectParameter,
  array: parseArrayParameter,
  string: parseBasicParameter,
  number: parseBasicParameter,
  boolean: parseBasicParameter,
};

function parseParameter(param, paramName, typedefs) {
  if (param === undefined) {
    return {};
  }
  const { type } = param;
  const parser = parserMap[type] || parseObjectParameter;
  if (!parser) {
    return {};
  }
  return parser(param, paramName, typedefs);
}

function parseArrayParameter(param, paramName, typedefs) {
  const { type, valueType, description } = param;

  const { type: valueItemType, itemType } = valueType;

  const parsedType = itemType || valueItemType;
  if (['string', 'number', 'boolean'].includes(parsedType)) {
    return { paramName, type, itemType: parsedType, description };
  }

  const parser = parserMap[itemType || valueItemType] || parseObjectParameter;
  const name = paramName + 'Item';
  const result = parser(valueType, name, typedefs);

  if (global.typedefs) {
    global.typedefs[name] = { name, result, description };
  }
  return { paramName, type, itemType: name, description };
}

function parseObjectParameter(param, paramName) {
  if (!param || typeof param !== 'object') {
    return null;
  }
  let result = {};
  const keys = Object.keys(param);
  try {
    keys.forEach((key) => {
      const value = param[key];
      const { type = 'object' } = value || {};
      if (!type) {
        return {};
      }
      const parser = parserMap[type] || parseObjectParameter;

      result[key] = parser(value, key);
    });
    // global.typedefs[paramName] = result;
    if (global.typedefs) {
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
