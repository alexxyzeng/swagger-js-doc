const fs = require('fs');
const { parseDefinitionType } = require('./parseDefinitionType');
const { parseToResponseDef } = require('./parseToDef');
const { parseParamType } = require('./parseParameters');
const { parseParameter } = require('../writeTpl');
// const definitions
const definitions = {
  统一响应体Ofapp首页响应数据: {
    type: 'object',
    properties: {
      code: {
        type: 'integer',
        format: 'int32',
        example: 200,
        description: '业务响应状态',
      },
      data: {
        properties: {
          workorderStatistics: {
            type: 'array',
            description: '工单权限及数量统计',
            items: {
              properties: {
                count: {
                  type: 'integer',
                  format: 'int32',
                  description: '数量',
                },
                permission: {
                  type: 'string',
                  description:
                    '用户是否有此操作权限，app首页使用 是否枚举{否=No-0, 是=Yes-1}',
                  enum: {
                    '0': '0',
                    '1': '1',
                  },
                },
                type: {
                  type: 'string',
                  description:
                    '操作类型 {抢单=Scramble-1, 派工=Dispatch-2, 处理=Process-3, 审批=Approval-4, 待验证或存档=CheckArchive-5, 我的报单=MyReport-6, 待转单=Transfer-7, 待完成=Pending-8, 待验证=Check-9, 待存档=Archive-10}',
                  enum: {
                    '0': '1',
                    '1': '2',
                    '2': '3',
                    '3': '4',
                    '4': '5',
                    '5': '6',
                    '6': '7',
                    '7': '8',
                    '8': '9',
                    '9': '10',
                  },
                },
              },
            },
          },
        },
      },
      message: {
        type: 'string',
        description: '消息',
      },
      traceId: {
        type: 'string',
        description: '用于链路追踪的ID',
      },
    },
  },
};
function parseResponse({ responses }) {
  const { 200: successResponse } = responses;
  const { schema } = successResponse;
  const definitionType = parseDefinitionType(schema);
  const definition = definitions[definitionType];
  if (!definition) {
    return;
  }
  global.typedefs = {};
  // fs.writeFileSync(
  //   'response.js',
  //   JSON.stringify(
  //     // parseParameter(parseParamType(definition.properties), 'responseTest', {}),
  //     parseParamType(definition),
  //     null,
  //     2
  //   )
  // );
  // fs.appendFileSync('response.js', '\n');
  fs.writeFileSync(
    'response.js',
    parseToResponseDef(parseParamType(definition))
  );
}

parseResponse({
  responses: {
    '200': {
      description: 'OK',
      schema: {
        $ref: '#/definitions/统一响应体Ofapp首页响应数据',
      },
    },
    '401': {
      description: 'Unauthorized',
    },
    '403': {
      description: 'Forbidden',
    },
    '404': {
      description: 'Not Found',
    },
  },
});

module.exports = {
  parseResponse,
};
