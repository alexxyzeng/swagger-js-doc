{
  "path": "/inspect-task/handle/workorder",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskId",
            "description": "巡检任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "jobType",
            "description": "任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}",
            "enum": []
          },
          {
            "type": "number",
            "name": "facilityId",
            "description": "设备ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskJobId",
            "description": "巡检任务-工作任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskObjectId",
            "description": "巡检任务-工作对象ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskContentId",
            "description": "巡检任务内容ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-工单列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "workorderUsingGET",
      "tags": [
        "inspect-task"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "description": {
              "type": "string",
              "description": "故障描述",
              "enum": []
            },
            "handleResult": {
              "type": "string",
              "description": "异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "handleWay": {
              "type": "string",
              "description": "异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "serviceman": {
              "type": "string",
              "description": "维修人员",
              "enum": []
            },
            "taskContentId": {
              "type": "number",
              "description": "任务内容ID",
              "required": false,
              "enum": []
            },
            "taskId": {
              "type": "number",
              "description": "任务ID",
              "required": false,
              "enum": []
            },
            "workorderCode": {
              "type": "string",
              "description": "工单编号",
              "enum": []
            },
            "workorderId": {
              "type": "number",
              "description": "工单ID",
              "required": false,
              "enum": []
            },
            "workorders": {
              "type": "array",
              "valueType": {
                "type": "object",
                "description": {
                  "type": "string",
                  "description": "问题描述",
                  "enum": []
                },
                "facilities": {
                  "type": "array",
                  "valueType": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "required": false,
                  "description": "设备列表"
                },
                "files": {
                  "fileTypes": {
                    "type": "array",
                    "valueType": {
                      "type": "object",
                      "contentType": {
                        "type": "string",
                        "description": "文件ContentType",
                        "enum": []
                      },
                      "fileId": {
                        "type": "number",
                        "description": "文件Id",
                        "required": false,
                        "enum": []
                      },
                      "fileName": {
                        "type": "string",
                        "description": "文件名称",
                        "enum": []
                      },
                      "fileSize": {
                        "type": "number",
                        "description": "文件大小",
                        "required": false,
                        "enum": []
                      },
                      "fileType": {
                        "type": "string",
                        "description": "文件类型 文件类型{图片=Image-1, 视频=Video-2, 音频=Voice-3, 附件=Attachment-4}",
                        "enum": [
                          "1",
                          "2",
                          "3",
                          "4"
                        ]
                      },
                      "ossUrl": {
                        "type": "string",
                        "description": "ossUrl文件下载地址",
                        "enum": []
                      },
                      "path": {
                        "type": "string",
                        "description": "公共上传服务返回id，用于下载",
                        "enum": []
                      },
                      "storeFileName": {
                        "type": "string",
                        "description": "存储文件名，用于返回ossUrl地址",
                        "enum": []
                      },
                      "url": {
                        "type": "string",
                        "description": "公共服务文件下载地址",
                        "enum": []
                      }
                    },
                    "required": false,
                    "description": ""
                  }
                },
                "isRefFacility": {
                  "type": "string",
                  "description": "是否关联设备 0-不关联 1-关联 是否枚举{否=No-0, 是=Yes-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "orgDepartmentId": {
                  "type": "number",
                  "description": "部门id",
                  "required": false,
                  "enum": []
                },
                "phone": {
                  "type": "string",
                  "description": "联系电话",
                  "enum": []
                },
                "spaceDtos": {
                  "type": "array",
                  "valueType": {
                    "type": "object",
                    "description": {
                      "type": "string",
                      "description": "处理方式",
                      "enum": []
                    },
                    "files": {
                      "fileTypes": {
                        "type": "array",
                        "valueType": {
                          "type": "object",
                          "contentType": {
                            "type": "string",
                            "description": "文件ContentType",
                            "enum": []
                          },
                          "fileId": {
                            "type": "number",
                            "description": "文件Id",
                            "required": false,
                            "enum": []
                          },
                          "fileName": {
                            "type": "string",
                            "description": "文件名称",
                            "enum": []
                          },
                          "fileSize": {
                            "type": "number",
                            "description": "文件大小",
                            "required": false,
                            "enum": []
                          },
                          "fileType": {
                            "type": "string",
                            "description": "文件类型 文件类型{图片=Image-1, 视频=Video-2, 音频=Voice-3, 附件=Attachment-4}",
                            "enum": [
                              "1",
                              "2",
                              "3",
                              "4"
                            ]
                          },
                          "ossUrl": {
                            "type": "string",
                            "description": "ossUrl文件下载地址",
                            "enum": []
                          },
                          "path": {
                            "type": "string",
                            "description": "公共上传服务返回id，用于下载",
                            "enum": []
                          },
                          "storeFileName": {
                            "type": "string",
                            "description": "存储文件名，用于返回ossUrl地址",
                            "enum": []
                          },
                          "url": {
                            "type": "string",
                            "description": "公共服务文件下载地址",
                            "enum": []
                          }
                        },
                        "required": false,
                        "description": ""
                      }
                    },
                    "spBuildingId": {
                      "type": "number",
                      "description": "大楼id",
                      "required": false,
                      "enum": []
                    },
                    "spFloorId": {
                      "type": "number",
                      "description": "楼层id",
                      "required": false,
                      "enum": []
                    },
                    "spSpaceId": {
                      "type": "number",
                      "description": "房间id",
                      "required": false,
                      "enum": []
                    }
                  },
                  "required": false,
                  "description": "空间位置"
                },
                "userId": {
                  "type": "number",
                  "description": "用户/客户ID",
                  "required": false,
                  "enum": []
                },
                "userType": {
                  "type": "string",
                  "description": "用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}",
                  "enum": [
                    "1",
                    "2",
                    "9"
                  ]
                },
                "username": {
                  "type": "string",
                  "description": "报障人名称",
                  "enum": []
                },
                "woPriorityId": {
                  "type": "number",
                  "description": "优先级id",
                  "required": false,
                  "enum": []
                },
                "woServiceTypeId": {
                  "type": "number",
                  "description": "服务类型id",
                  "required": false,
                  "enum": []
                },
                "woServiceTypeRefId": {
                  "type": "number",
                  "description": "服务类型关联id, 集团版必传",
                  "required": false,
                  "enum": []
                },
                "woSlaId": {
                  "type": "number",
                  "description": "slaId",
                  "required": false,
                  "enum": []
                },
                "woType": {
                  "type": "string",
                  "description": "工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
                  "enum": [
                    "1",
                    "2",
                    "3",
                    "4"
                  ]
                }
              },
              "required": false,
              "description": "工单信息"
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检任务-报修工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "workorderUsingPOST",
      "tags": [
        "inspect-task"
      ]
    }
  }
}