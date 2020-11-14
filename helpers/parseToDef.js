const fs = require('fs');
const path = require('path');
const tpl =
  fs.readFileSync(path.resolve(__dirname + '/tpl/definition.js.tpl')) + '';

const {
  API_DEFINITION_TYPE,
  API_DEFINITION_NAME,
  API_DEFINITION_PROPERTY,
} = require('../const/tpl');

const parserMap = {
  string: parseBasicTypeToProp,
  number: parseBasicTypeToProp,
  boolean: parseBasicTypeToProp,
  array: parseArrayTypeToProp,
};

function parseToDefs(defs, needPrefix) {
  let parsedResult = [];
  const defList = Object.entries(defs);
  defList.forEach((def) => {
    const [defKey, value] = def;
    // if (key.includes('seriesItem')) {
    //   console.log('====================================');
    //   console.log(value, '---- value');
    //   console.log('====================================');
    // }
    const { result } = value;
    const keys = Object.keys(result);
    if (defKey === 'valueItem') {
      console.log('====================================');
      console.log(result);
      console.log(keys, '----- keys')
      console.log('====================================');
      
    }
    let typeName = tpl
      .replace(API_DEFINITION_TYPE, 'object')
      .replace(API_DEFINITION_NAME, defKey.trim());
    let parsedDefs = [];
    
    const isResponse = defKey.endsWith('Response');
    const showPrefix = needPrefix && isResponse;
    const prefix = defKey.replace('Response', '');
    keys.forEach((key) => {
      const value = result[key];
      const prefixStr = showPrefix ? prefix : undefined;

      const parsedDef = parseToDef(value, key, prefixStr);
      if (parsedDef) {
        parsedDefs.push(parsedDef);
      }
    });
    typeName = typeName.replace(
      API_DEFINITION_PROPERTY,
      parsedDefs.join('\n ')
    );
    parsedResult.push(typeName);
  });
  return parsedResult.join('\n\n');
}

function parseToDef(value, key, prefix) {
  if (!value) {
    return '';
  }
  const { type } = value;
  const parser = parserMap[type] || parseObjectTypeToProp;
  const finalKey = !type && prefix ? `${prefix}${key}` : key;
  return parser(value, key, finalKey);
}

// TODO: 完善对应的解析
function parseBasicTypeToProp(typeDef) {
  const { paramName, type, description = '' } = typeDef;
  return `* @property {${type}} ${paramName} ${description}`;
}

function parseArrayTypeToProp(typeDef) {
  const { paramName, itemType } = typeDef;
  return `* @property {[${itemType}]} ${paramName}`;
}

function parseObjectTypeToProp(typeDef, key, propertyKey) {
  // TODO: 增加对object类型的解析
  return parseBasicTypeToProp({ ...typeDef, type: propertyKey, paramName: key });
}

module.exports = {
  parseToDefs,
  parseToDef,
};


const def = {
  data: {
    swagger_ui_type: 'array',
    valueType: {
      swagger_ui_type: undefined,
      name: undefined,
      description: '',
      definitionType: undefined,
      required: false
    },
    required: false,
    definitionType: undefined,
    description: '',
    name: undefined
  },
  name: {
    swagger_ui_type: 'string',
    name: undefined,
    description: '',
    definitionType: undefined,
    required: false
  },
  type: {
    swagger_ui_type: 'string',
    name: undefined,
    description: '',
    definitionType: undefined,
    required: false
  }
}

// {
//   "code": 200,
//   "data": {
//     "avgRespInfo": {
//       "categories": [
//         "string"
//       ],
//       "name": "string",
//       "series": [
//         {
//           "data": [
//             {}
//           ],
//           "name": "string",
//           "type": "string"
//         }
//       ]
//     },
//     "demandAndCompRate": {
//       "data": {
//         "categories": [
//           "string"
//         ],
//         "series": [
//           {
//             "data": [
//               {}
//             ],
//             "name": "string",
//             "type": "string"
//           }
//         ]
//       },
//       "name": "string"
//     },
//     "evaluateInfo": {
//       "data": {
//         "categories": [
//           "string"
//         ],
//         "indicator": [
//           {
//             "name": "string"
//           }
//         ],
//         "series": [
//           {
//             "data": [
//               {
//                 "name": "string",
//                 "value": [
//                   {}
//                 ]
//               }
//             ],
//             "name": "string"
//           }
//         ]
//       },
//       "name": "string"
//     },
//     "projectInfo": [
//       {
//         "data": {
//           "value": {}
//         },
//         "name": "string"
//       }
//     ],
//     "statisticInfo": {
//       "data": {
//         "columns": [
//           {
//             "dataIndex": "string",
//             "title": "string"
//           }
//         ],
//         "dataSource": [
//           {}
//         ]
//       },
//       "name": "string"
//     }
//   },
//   "message": "string",
//   "traceId": "string"
// }