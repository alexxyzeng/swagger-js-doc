const fs = require('fs');
const process = require('process');

const { swaggerUIPath, swaggerBasePath } = require('./const/index');
const {
  API_SERVICE_TAGS_TPL,
  API_SERVICE_DOC_URL_TPL,
  API_SERVICE_SUMMARY_TPL,
  API_SERVICE_DESCRIPTION_TPL,
  API_SERVICE_PARAM_PROPS_TPL,
  API_SERVICE_PARAM_TPL,
  API_SERVICE_METHOD_PARAM_TPL,
  API_SERVICE_NAME_TPL,
  API_SERVICE_URL_TPL,
  API_SERVICE_METHOD_TPL,
  API_SERVICE_DEFINITION
} = require('./const/tpl');

const [baseUrl] = process.argv.slice(2);
const tpl = fs.readFileSync('./tpl/service.js.tpl') + '';

const result = {
  path: '/inspect-task/handle/{id}',
  methods: {
    get: {
      parameters: {
        body: [],
        path: [{ type: 'number', description: 'id', required: true, enum: [] }],
        query: []
      },
      summary: '巡检任务-工单-详情',
      consumes: ['application/json'],
      operationId: 'findByIdUsingGET_26',
      tags: ['inspect-task']
    },
    put: {
      parameters: {
        body: [
          {
            description: { type: 'string', description: '故障描述', enum: [] },
            handleResult: {
              type: 'number',
              description: '{已处理=1, 未处理=2}',
              required: false,
              enum: [1, 2]
            },
            handleWay: {
              type: 'number',
              description: '{现状处理=1, 报修工单=2}',
              required: false,
              enum: [1, 2]
            },
            id: {
              type: 'number',
              description: '唯一id',
              required: false,
              enum: []
            },
            projectId: {
              type: 'number',
              description: '项目id',
              required: false,
              enum: []
            },
            serviceman: { type: 'string', description: '维修人员', enum: [] },
            taskContentId: {
              type: 'number',
              description: '任务内容ID',
              required: false,
              enum: []
            },
            taskId: {
              type: 'number',
              description: '任务ID',
              required: false,
              enum: []
            },
            workorderCode: {
              type: 'string',
              description: '工单编号',
              enum: []
            },
            workorderId: {
              type: 'number',
              description: '工单ID',
              required: false,
              enum: []
            },
            workorders: {
              type: 'array',
              valueType: {
                appointmentEndTime: {
                  type: 'string',
                  description: '预约结束时间，从服务台同步过来',
                  enum: []
                },
                appointmentStartTime: {
                  type: 'string',
                  description: '预约开始时间，从服务台同步过来',
                  enum: []
                },
                description: {
                  type: 'string',
                  description: '问题描述',
                  enum: []
                },
                facilityDtos: {
                  type: 'array',
                  valueType: {
                    createTime: {
                      type: 'string',
                      description: '创建时间',
                      enum: []
                    },
                    facFacilityId: {
                      type: 'number',
                      description: '设备id',
                      required: false,
                      enum: []
                    },
                    facilityCode: {
                      type: 'string',
                      description: '设备编码',
                      enum: []
                    },
                    facilityName: {
                      type: 'string',
                      description: '设备名称',
                      enum: []
                    },
                    facilityType: {
                      type: 'string',
                      description: '系统分类',
                      enum: []
                    },
                    id: {
                      type: 'number',
                      description: '由程序分配的唯一ID',
                      required: false,
                      enum: []
                    },
                    modifyTime: {
                      type: 'string',
                      description: '最后的修改时间',
                      enum: []
                    },
                    mountSpace: {
                      type: 'string',
                      description: '位置',
                      enum: []
                    },
                    processDesc: {
                      type: 'string',
                      description: '处理方式',
                      enum: []
                    },
                    processFiles: { description: '', enum: [] },
                    projectId: {
                      type: 'number',
                      description: '项目ID',
                      required: false,
                      enum: []
                    },
                    siteDesc: {
                      type: 'string',
                      description: '现场描述',
                      enum: []
                    },
                    siteFiles: { description: '', enum: [] },
                    woWorkorderId: {
                      type: 'number',
                      description: '工单id',
                      required: false,
                      enum: []
                    }
                  },
                  required: false
                },
                files: { description: '', enum: [] },
                isRefFacility: {
                  type: 'number',
                  description: '是否关联设备 0-不关联 1-关联',
                  required: false,
                  enum: []
                },
                orgDepartmentId: {
                  type: 'number',
                  description: '部门id',
                  required: false,
                  enum: []
                },
                phone: { type: 'string', description: '联系电话', enum: [] },
                spaceDtos: {
                  type: 'array',
                  valueType: {
                    createTime: {
                      type: 'string',
                      description: '创建时间',
                      enum: []
                    },
                    description: {
                      type: 'string',
                      description: '描述',
                      enum: []
                    },
                    id: {
                      type: 'number',
                      description: '由程序分配的唯一ID',
                      required: false,
                      enum: []
                    },
                    isWorkorderCreated: {
                      type: 'number',
                      description: '',
                      required: false,
                      enum: []
                    },
                    modifyTime: {
                      type: 'string',
                      description: '最后的修改时间',
                      enum: []
                    },
                    projectId: {
                      type: 'number',
                      description: '项目ID',
                      required: false,
                      enum: []
                    },
                    spBuildingId: {
                      type: 'number',
                      description: '大楼id',
                      required: false,
                      enum: []
                    },
                    spBuildingName: {
                      type: 'string',
                      description: '楼宇名称',
                      enum: []
                    },
                    spFloorId: {
                      type: 'number',
                      description: '楼层id',
                      required: false,
                      enum: []
                    },
                    spFloorName: {
                      type: 'string',
                      description: '楼层名称',
                      enum: []
                    },
                    spSpaceId: {
                      type: 'number',
                      description: '房间id',
                      required: false,
                      enum: []
                    },
                    spSpaceName: {
                      type: 'string',
                      description: '房间名称',
                      enum: []
                    },
                    woWorkorderId: {
                      type: 'number',
                      description: '工单id',
                      required: false,
                      enum: []
                    }
                  },
                  required: false
                },
                userId: {
                  type: 'number',
                  description: '用户/客户ID',
                  required: false,
                  enum: []
                },
                userType: {
                  type: 'number',
                  description: '用户类型 1-用户 2-客户 3-填写',
                  required: false,
                  enum: []
                },
                username: {
                  type: 'string',
                  description: '报障人名称',
                  enum: []
                },
                woPriorityId: {
                  type: 'number',
                  description: '优先级id',
                  required: false,
                  enum: []
                },
                woServiceTypeId: {
                  type: 'number',
                  description: '服务类型id',
                  required: false,
                  enum: []
                },
                woServiceTypeRefId: {
                  type: 'number',
                  description: '服务类型关联id, 集团版必传',
                  required: false,
                  enum: []
                },
                woSlaId: {
                  type: 'number',
                  description: 'slaId',
                  required: false,
                  enum: []
                },
                woType: {
                  type: 'number',
                  description:
                    '{内部报修=1, 外部报修=2, 计划性维护=3, 内部或外部报修=4}',
                  required: false,
                  enum: [1, 2, 3, 4]
                }
              },
              required: false
            }
          }
        ],
        path: [{ type: 'number', description: 'id', required: true, enum: [] }],
        query: []
      },
      summary: '修改巡检任务-工单-部分',
      consumes: ['application/json'],
      operationId: 'updateUsingPUT_33',
      tags: ['inspect-task']
    },
    delete: {
      parameters: {
        body: [],
        path: [{ type: 'number', description: 'id', required: true, enum: [] }],
        query: []
      },
      summary: '删除巡检任务-工单',
      consumes: ['application/json'],
      operationId: 'deleteUsingDELETE_31',
      tags: ['inspect-task']
    }
  }
};
let infos = '';
const base = baseUrl + swaggerUIPath + swaggerBasePath;
const { path, methods } = result;
for (let methodName in methods) {
  const method = methods[methodName];
  const { parameters, summary, operationId, tags, description = '' } = method;
  const tagStr = tags.join(',');
  const [tag] = tags;
  const link = `${base}${tag}/${operationId}`;
  // TODO: 增加对具体参数的生成
  // TODO: 增加自定义方法名
  const {
    url,
    params: { paths, bodies }
  } = parsePathAndParametersToString(path, parameters);
  const serviceInfo = tpl
    .replace(API_SERVICE_DEFINITION, path)
    .replace(API_SERVICE_DOC_URL_TPL, link)
    .replace(API_SERVICE_TAGS_TPL, tagStr)
    .replace(API_SERVICE_SUMMARY_TPL, summary)
    .replace(API_SERVICE_DESCRIPTION_TPL, description)
    .replace(API_SERVICE_NAME_TPL, operationId)
    .replace(API_SERVICE_METHOD_TPL, methodName)
    .replace(API_SERVICE_URL_TPL, url)
    .replace(API_SERVICE_PARAM_PROPS_TPL, paths + '\n' + bodies);

  console.log('====================================');
  console.log(url);
  console.log(paths);
  console.log('====================================');
  infos += serviceInfo;
  infos += '\n';
}

/**
 *
 * @param {string} path
 * @param {object} parameters
 */
function parsePathAndParametersToString(initialUrl, parameters) {
  let result = { url: '', params: {} };
  const { path, body, query } = parameters;
  let url = initialUrl;
  if (path.length > 0) {
    let paths = [];
    path.forEach(pathItem => {
      const { type, description } = pathItem;
      url = url.replace(`{${description}}`, '${' + description + '}');
      paths.push(`* @param {${type}} params.${description} - path`);
    });
    result.url = `"${url}"`;
    result.params.paths = paths.join('\n');
  }
  //  TODO: 增加对复杂类型的解析
  if (body.length > 0) {
    let bodyParams = [];
    bodyParams.push(` * @param {object} params.body - 请求体`);
    body.forEach(bodyItem => {
      if (typeof bodyItem !== 'object') {
        return;
      }
      for (let i in bodyItem) {
        const { type, description } = bodyItem[i];
        bodyParams.push(
          ` * @param {${type}} params.body.${i} - ${description}`
        );
      }
    });
    result.params.bodies = bodyParams.join('\n');
  }
  //  TODO: 解析query
  return result;
}

fs.writeFileSync('test.js', infos);
