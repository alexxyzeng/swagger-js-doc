const fs = require('fs');
const process = require('process');
const { swaggerUIPath, swaggerBasePath } = require('../const/index');
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
} = require('../const/tpl');

const [baseUrl] = process.argv.slice(2);
const tpl = fs.readFileSync('../tpl/service.js.tpl') + '';

const parserMap = {
  array: parseArrayParameter,
  object: parseObjectParamter
};

const result = {
  path: '/inspect-task/handle/{id}',
  methods: {
    get: {
      parameters: {
        body: [],
        path: [
          {
            type: 'number',
            description: 'id',
            required: true,
            enum: []
          }
        ],
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
            description: {
              type: 'string',
              description: '故障描述',
              enum: []
            },
            handleResult: {
              type: 'string',
              description:
                '异常处理结果：1-已处理、2-未处理 {已处理=Dispose, 未处理=Undispose}',
              enum: ['1', '2']
            },
            handleWay: {
              type: 'string',
              description:
                '异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation, 报修工单=Workorder}',
              enum: ['1', '2']
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
            serviceman: {
              type: 'string',
              description: '维修人员',
              enum: []
            },
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
                    processFiles: {
                      fileTypes: {
                        type: 'array',
                        valueType: {
                          contentType: {
                            type: 'string',
                            description: '文件ContentType',
                            enum: []
                          },
                          fileId: {
                            type: 'number',
                            description: '文件Id',
                            required: false,
                            enum: []
                          },
                          fileName: {
                            type: 'string',
                            description: '文件名称',
                            enum: []
                          },
                          fileSize: {
                            type: 'number',
                            description: '文件大小',
                            required: false,
                            enum: []
                          },
                          fileType: {
                            type: 'string',
                            description:
                              '文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}',
                            enum: ['1', '2', '3', '4']
                          },
                          ossUrl: {
                            type: 'string',
                            description: 'ossUrl文件下载地址',
                            enum: []
                          },
                          path: {
                            type: 'string',
                            description: '公共上传服务返回id，用于下载',
                            enum: []
                          },
                          storeFileName: {
                            type: 'string',
                            description: '存储文件名，用于返回ossUrl地址',
                            enum: []
                          },
                          url: {
                            type: 'string',
                            description: '公共服务文件下载地址',
                            enum: []
                          }
                        },
                        required: false
                      }
                    },
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
                    siteFiles: {
                      fileTypes: {
                        type: 'array',
                        valueType: {
                          contentType: {
                            type: 'string',
                            description: '文件ContentType',
                            enum: []
                          },
                          fileId: {
                            type: 'number',
                            description: '文件Id',
                            required: false,
                            enum: []
                          },
                          fileName: {
                            type: 'string',
                            description: '文件名称',
                            enum: []
                          },
                          fileSize: {
                            type: 'number',
                            description: '文件大小',
                            required: false,
                            enum: []
                          },
                          fileType: {
                            type: 'string',
                            description:
                              '文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}',
                            enum: ['1', '2', '3', '4']
                          },
                          ossUrl: {
                            type: 'string',
                            description: 'ossUrl文件下载地址',
                            enum: []
                          },
                          path: {
                            type: 'string',
                            description: '公共上传服务返回id，用于下载',
                            enum: []
                          },
                          storeFileName: {
                            type: 'string',
                            description: '存储文件名，用于返回ossUrl地址',
                            enum: []
                          },
                          url: {
                            type: 'string',
                            description: '公共服务文件下载地址',
                            enum: []
                          }
                        },
                        required: false
                      }
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
                files: {
                  fileTypes: {
                    type: 'array',
                    valueType: {
                      contentType: {
                        type: 'string',
                        description: '文件ContentType',
                        enum: []
                      },
                      fileId: {
                        type: 'number',
                        description: '文件Id',
                        required: false,
                        enum: []
                      },
                      fileName: {
                        type: 'string',
                        description: '文件名称',
                        enum: []
                      },
                      fileSize: {
                        type: 'number',
                        description: '文件大小',
                        required: false,
                        enum: []
                      },
                      fileType: {
                        type: 'string',
                        description:
                          '文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}',
                        enum: ['1', '2', '3', '4']
                      },
                      ossUrl: {
                        type: 'string',
                        description: 'ossUrl文件下载地址',
                        enum: []
                      },
                      path: {
                        type: 'string',
                        description: '公共上传服务返回id，用于下载',
                        enum: []
                      },
                      storeFileName: {
                        type: 'string',
                        description: '存储文件名，用于返回ossUrl地址',
                        enum: []
                      },
                      url: {
                        type: 'string',
                        description: '公共服务文件下载地址',
                        enum: []
                      }
                    },
                    required: false
                  }
                },
                isRefFacility: {
                  type: 'string',
                  description:
                    '是否关联设备 0-不关联 1-关联 是否枚举{否=No, 是=Yes}',
                  enum: ['0', '1']
                },
                orgDepartmentId: {
                  type: 'number',
                  description: '部门id',
                  required: false,
                  enum: []
                },
                phone: {
                  type: 'string',
                  description: '联系电话',
                  enum: []
                },
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
                  type: 'string',
                  description:
                    '用户类型 1-用户 2-客户 9-填写 {员工=User, 客户=Clientele, 其他=Other}',
                  enum: ['1', '2', '9']
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
                  type: 'string',
                  description:
                    '工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}',
                  enum: ['1', '2', '3', '4']
                }
              },
              required: false
            }
          }
        ],
        path: [
          {
            type: 'number',
            description: 'id',
            required: true,
            enum: []
          }
        ],
        query: []
      },
      summary: '修改巡检任务-工单-部分',
      consumes: ['application/json'],
      operationId: 'updateUsingPUT_34',
      tags: ['inspect-task']
    },
    delete: {
      parameters: {
        body: [],
        path: [
          {
            type: 'number',
            description: 'id',
            required: true,
            enum: []
          }
        ],
        query: []
      },
      summary: '删除巡检任务-工单',
      consumes: ['application/json'],
      operationId: 'deleteUsingDELETE_31',
      tags: ['inspect-task']
    }
  }
};

let info = '';
const base = baseUrl + swaggerUIPath + swaggerBasePath;
const { path, methods } = result;
for (let methodName in methods) {
  const method = methods[methodName];
  const { parameters, summary, operationId, tags, description = '' } = method;
  const tagStr = tags.join(',');
  const [tag] = tags;
  const link = `${base}${tag}/${operationId}`;
}
