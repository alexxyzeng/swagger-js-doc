require('jest');

const { parseParams, parseParamType } = require('../helpers/parseParameters');
const { isValidDefinitionType } = require('../helpers/parseDefinitions');

// const data = {
//   get: {
//     tags: ['service - center - demand - track'],
//     summary: '需求跟进记录 - 列表',
//     operationId: 'findUsingGET_9',
//     consumes: ['application / json'],
//     produces: [' */*'],
//     parameters: [
//       { name: 'Authorization', in: 'header', required: false, type: 'string' },
//       { name: 'df-tenant-id', in: 'header', required: false, type: 'string' },
//       { name: 'df-project-id', in: 'header', required: false, type: 'string' },
//       {
//         name: 'pageNumber',
//         in: 'query',
//         description: '获取当前页',
//         required: false,
//         type: 'integer',
//         format: 'int32',
//       },
//       {
//         name: 'pageSize',
//         in: 'query',
//         description: '每页显示的数量',
//         required: false,
//         type: 'integer',
//         format: 'int32',
//       },
//       {
//         name: 'pageSort',
//         in: 'query',
//         description:
//           '排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).',
//         required: false,
//         type: 'string',
//       },
//       {
//         name: 'tenantId',
//         in: 'query',
//         description: '租户ID',
//         required: false,
//         type: 'integer',
//         format: 'int64',
//       },
//       {
//         name: 'projectId',
//         in: 'query',
//         description: '项目ID',
//         required: false,
//         type: 'integer',
//         format: 'int64',
//       },
//       {
//         name: 'id',
//         in: 'query',
//         description: 'ID',
//         required: false,
//         type: 'integer',
//         format: 'int64',
//       },
//       {
//         name: 'demandId',
//         in: 'query',
//         description: '需求ID',
//         required: false,
//         type: 'integer',
//         format: 'int64',
//       },
//     ],
//     responses: {
//       '200': {
//         description: 'OK',
//         schema: {
//           $ref: '#/definitions/统一响应体Of分页响应体Of需求跟进记录-响应',
//         },
//       },
//       '401': { description: 'Unauthorized' },
//       '403': { description: 'Forbidden' },
//       '404': { description: 'Not Found' },
//     },
//   },
//   delete: {
//     tags: ['service-center-demand-track'],
//     summary: '批量删除需求跟进记录',
//     operationId: 'deleteUsingDELETE_4',
//     consumes: ['application/json'],
//     produces: ['*/* '],
//     parameters: [
//       {
//         name: 'Authorization',
//         'in': 'header',
//         required: false,
//         type: 'string',
//       },
//       {
//         name: 'df - tenant - id',
//         'in': 'header',
//         required: false,
//         type: 'string',
//       },
//       {
//         name: 'df - project - id',
//         'in': 'header',
//         required: false,
//         type: 'string',
//       },
//       {
//         'in': 'body',
//         name: 'idx',
//         description: 'idx',
//         required: true,
//         schema: { type: 'array', items: { type: 'integer', format: 'int64' } },
//       },
//     ],
//     responses: {
//       '200': {
//         description: 'OK',
//         schema: { $ref: '# / definitions / 统一响应体Ofnull' },
//       },
//       '204': { description: 'No Content' },
//       '401': { description: 'Unauthorized' },
//       '403': { description: 'Forbidden' },
//     },
//   },
// };
const data = {
  tags: ['service-center-demand-track'],
  summary: '批量删除需求跟进记录',
  operationId: 'deleteUsingDELETE_4',
  consumes: ['application/json'],
  produces: ['*/*'],
  parameters: [
    {
      name: 'Authorization',
      in: 'header',
      required: false,
      type: 'string',
    },
    {
      name: 'df - tenant - id',
      in: 'header',
      required: false,
      type: 'string',
    },
    {
      name: 'df - project - id',
      in: 'header',
      required: false,
      type: 'string',
    },
    {
      in: 'body',
      name: 'idx',
      description: 'idx',
      required: true,
      schema: { type: 'array', items: { type: 'integer', format: 'int64' } },
    },
  ],
};

describe('parse parameters', () => {
  it('parse body paramters', () => {
    expect(parseParams(data, {})).toEqual({
      tags: ['service-center-demand-track'],
      summary: '批量删除需求跟进记录',
      operationId: 'deleteUsingDELETE_4',
      consumes: ['application/json'],
      parameters: {
        path: [],
        query: [],
        body: [
          {
            type: 'array',
            required: true,
            description: 'idx',
            name: 'idx',
            definitionType: undefined,
            valueType: {
              description: '',
              enum: [],
              required: true,
              type: 'number',
              name: undefined,
            },
          },
        ],
      },
    });
  });
  it('check is valid type', () => {
    expect(
      isValidDefinitionType({
        schema: { type: 'array', items: { type: 'integer', format: 'int64' } },
      })
    ).toBeFalsy();
  });
  it('parse primitive type array', () => {
    expect(
      parseParamType({
        in: 'body',
        name: 'idx',
        description: 'idx',
        required: true,
        schema: {
          type: 'array',
          items: { type: 'integer', format: 'int64' },
        },
      })
    ).toEqual({
      type: 'array',
      name: 'idx',
      valueType: {
        description: '',
        enum: [],
        required: true,
        type: 'number',
        name: undefined,
      },
      required: true,
      description: 'idx',
      definitionType: undefined,
    });
  });
});

it('parse error param type', () => {
  expect(
    parseParamType({
      name: 'currentCost',
      in: 'query',
      description: '本期费用：分',
      required: false,
      type: 'object',
    })
  ).toEqual({
    type: 'object',
    name: 'currentCost',
    required: false,
    description: '本期费用：分',
    enum: [],
    definitionType: undefined,
  });
});
