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
  const { swagger_ui_type } = param;
  const parser = parserMap[swagger_ui_type] || parseObjectParameter;
  if (!parser) {
    return {};
  }
  return parser(param, paramName, typedefs, needPrefix, prefix);
}

function parseArrayParameter(param, paramName, typedefs) {
  const { swagger_ui_type, valueType, description } = param;

  const { swagger_ui_type: valueItemType, itemType } = valueType;
  const parsedType = itemType || valueItemType;

  // const name = global.typedefs[global.parentName] ? global.parentName + 'Item' : global.parentName;
  let name = '';
  if (parsedType) {
    name = paramName + 'Item';
  } else {
    name = global.typedefs[global.parentName] ? global.parentName + 'Item' : global.parentName;
  }
  // if (name === 'seriesItem') {
  //   console.log(param, '---- param')
  //   console.log('====================================');
  //   console.log(global.typedefs);
  //   console.log('====================================');
  // }
  if (!parsedType) {
    return { paramName, type: swagger_ui_type, itemType: name, description };
  }
  global.parentName = paramName;
  if (['string', 'number', 'boolean'].includes(parsedType)) {
    return { paramName, type: swagger_ui_type, itemType: parsedType, description };
  }
  const parser = parserMap[parsedType] || parseObjectParameter;

  // const name = paramName + 'Item';
  // FIXME: 不能直接用paramName来确定, 有可能重复
  const result = parser(valueType, name, typedefs);
  if (global.typedefs && !global.typedefs[name]) {
    global.typedefs[name] = { name, result, description };
  }
  return { paramName, type: swagger_ui_type, itemType: name, description };
}

function parseObjectParameter(param, paramName, defs, needPrefix, prefix) {
  if (!param || typeof param !== 'object') {
    return null;
  }
  
  global.parentName = paramName;
  let result = {};
  const keys = Object.keys(param);
  try {
    keys.forEach((key) => {
      const value = param[key];
      const { swagger_ui_type = 'object' } = value || {};
      if (!swagger_ui_type) {
        return {};
      }
      const parser = parserMap[swagger_ui_type] || parseObjectParameter;
      const hasPrefix = needPrefix !== undefined && needPrefix === true && swagger_ui_type === 'object';
      const finalKey = hasPrefix ? `${prefix}${key}` : key;
      result[key] = parser(value, finalKey, undefined, false);
    });
    // global.typedefs[paramName] = result;
    if (global.typedefs && !global.typedefs[paramName]) {
      // FIXME: 不能直接用paramName来确定, 有可能重复
      global.typedefs[paramName] = { name: paramName, result };
    }
    return result;
  } catch (err) {
    console.log(err);
    return {};
  }
}

function parseBasicParameter(param, paramName) {
  const { swagger_ui_type, description } = param;
  return { paramName, type: swagger_ui_type, description };
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

const globalTypeDef = {
  dataItem: {
    name: 'dataItem',
    result: {
      swagger_ui_type: null,
      name: null,
      description: null,
      definitionType: null,
      required: null
    },
    description: ''
  },
  seriesItem: {
    name: 'seriesItem',
    result: {
      swagger_ui_type: null,
      data: [Object],
      name: [Object],
      type: [Object]
    },
    description: ''
  },
  avgRespInfo: {
    name: 'avgRespInfo',
    result: { categories: [Object], name: [Object], series: [Object] }
  },
  data: { name: 'data', result: { categories: [Object], series: [Object] } },
  demandAndCompRate: {
    name: 'demandAndCompRate',
    result: { data: [Object], name: [Object] }
  },
  indicatorItem: {
    name: 'indicatorItem',
    result: { swagger_ui_type: null, name: [Object] },
    description: ''
  }
}