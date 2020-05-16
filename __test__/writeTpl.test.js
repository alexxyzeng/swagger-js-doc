const {
  parsePathAndParametersToString,
  parseParameter,
  parseQuery,
  parseQueries,
} = require('../writeTpl');

describe('parse parameters and path', () => {
  it('parse path', () => {
    const parsedData = parsePathAndParametersToString('/demand/type/{id}', {
      body: [],
      path: [
        {
          type: 'number',
          description: 'id',
          required: true,
          enum: [],
        },
      ],
      query: [],
    });
    expect(parsedData.url).toBe('`/demand/type/${param.id}`');
  });
  it('parse path without path parameter', () => {
    const { url } = parsePathAndParametersToString('/app/index', {
      body: [],
      path: [],
      query: [],
    });
    expect(url).toBe('`/app/index`');
  });
  it('parse parameter', () => {
    const parsedData = parseParameter(
      {
        type: 'number',
        description: '设备信息最后一次更新时间',
        required: false,
        enum: [],
      },
      '2',
      {}
    );
    expect(parsedData).toEqual({
      paramName: '2',
      type: 'number',
      description: '设备信息最后一次更新时间',
    });
  });

  it('parse query', () => {
    expect(
      parseQuery({
        type: 'number',
        name: 'deviceLastUpdateTime',
        description: '设备信息最后一次更新时间',
        required: false,
        enum: [],
      })
    ).toBe(
      '* @param {number} params.query.deviceLastUpdateTime - 设备信息最后一次更新时间'
    );
    expect(
      parseQuery({
        type: 'string',
        name: 'userId',
        description: '用户ID',
        required: false,
        enum: [],
      })
    ).toBe('* @param {string} params.query.userId - 用户ID');

    expect(
      parseQuery({
        type: 'array',
        name: 'ids',
        valueType: {
          type: 'number',
          description: '',
          required: false,
          enum: [],
        },
        required: false,
        description: '需求ID(批量查询)',
      })
    ).toBe('* @param {[number]} params.query.ids - 需求ID(批量查询)');
  });
});
