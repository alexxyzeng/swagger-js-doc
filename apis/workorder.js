{
  "path": "/workorder",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "number",
            "description": "项目id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "工单编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "报障人名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "联系电话",
            "enum": []
          },
          {
            "type": "number",
            "description": "部门id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "服务类型id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "服务类型名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "设备分类ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "设备ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "是否收费 是否枚举{否=0, 是=1}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "服务类型关联id",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "string",
            "description": "优先级名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "大楼ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "楼层ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "空间ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "大楼名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "楼层名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "空间名称",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "string",
            "description": "问题描述",
            "enum": []
          },
          {
            "type": "number",
            "description": "关联的需求Id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "关联的需求编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "创建开始日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "创建结束日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "完成日期开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "完成日期结束",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "string",
            "description": "关键字筛选",
            "enum": []
          }
        ]
      },
      "summary": "工单查询",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_8",
      "tags": [
        "workorder"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "appointmentEndTime": {
              "type": "string",
              "description": "预约结束时间，从服务台同步过来",
              "enum": []
            },
            "appointmentStartTime": {
              "type": "string",
              "description": "预约开始时间，从服务台同步过来",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "问题描述",
              "enum": []
            },
            "facilityDtos": {
              "type": "array",
              "valueType": {
                "createTime": {
                  "type": "string",
                  "description": "创建时间",
                  "enum": []
                },
                "facFacilityId": {
                  "type": "number",
                  "description": "设备id",
                  "required": false,
                  "enum": []
                },
                "facilityCode": {
                  "type": "string",
                  "description": "设备编码",
                  "enum": []
                },
                "facilityName": {
                  "type": "string",
                  "description": "设备名称",
                  "enum": []
                },
                "facilityType": {
                  "type": "string",
                  "description": "系统分类",
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "由程序分配的唯一ID",
                  "required": false,
                  "enum": []
                },
                "modifyTime": {
                  "type": "string",
                  "description": "最后的修改时间",
                  "enum": []
                },
                "mountSpace": {
                  "type": "string",
                  "description": "位置",
                  "enum": []
                },
                "processDesc": {
                  "type": "string",
                  "description": "处理方式",
                  "enum": []
                },
                "processFiles": {
                  "fileTypes": {
                    "type": "array",
                    "valueType": {
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
                        "description": "文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}",
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
                    "required": false
                  }
                },
                "projectId": {
                  "type": "number",
                  "description": "项目ID",
                  "required": false,
                  "enum": []
                },
                "siteDesc": {
                  "type": "string",
                  "description": "现场描述",
                  "enum": []
                },
                "siteFiles": {
                  "fileTypes": {
                    "type": "array",
                    "valueType": {
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
                        "description": "文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}",
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
                    "required": false
                  }
                },
                "woWorkorderId": {
                  "type": "number",
                  "description": "工单id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false
            },
            "files": {
              "fileTypes": {
                "type": "array",
                "valueType": {
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
                    "description": "文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}",
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
                "required": false
              }
            },
            "isRefFacility": {
              "type": "string",
              "description": "是否关联设备 0-不关联 1-关联 是否枚举{否=No, 是=Yes}",
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
                "createTime": {
                  "type": "string",
                  "description": "创建时间",
                  "enum": []
                },
                "description": {
                  "type": "string",
                  "description": "描述",
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "由程序分配的唯一ID",
                  "required": false,
                  "enum": []
                },
                "modifyTime": {
                  "type": "string",
                  "description": "最后的修改时间",
                  "enum": []
                },
                "projectId": {
                  "type": "number",
                  "description": "项目ID",
                  "required": false,
                  "enum": []
                },
                "spBuildingId": {
                  "type": "number",
                  "description": "大楼id",
                  "required": false,
                  "enum": []
                },
                "spBuildingName": {
                  "type": "string",
                  "description": "楼宇名称",
                  "enum": []
                },
                "spFloorId": {
                  "type": "number",
                  "description": "楼层id",
                  "required": false,
                  "enum": []
                },
                "spFloorName": {
                  "type": "string",
                  "description": "楼层名称",
                  "enum": []
                },
                "spSpaceId": {
                  "type": "number",
                  "description": "房间id",
                  "required": false,
                  "enum": []
                },
                "spSpaceName": {
                  "type": "string",
                  "description": "房间名称",
                  "enum": []
                },
                "woWorkorderId": {
                  "type": "number",
                  "description": "工单id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false
            },
            "userId": {
              "type": "number",
              "description": "用户/客户ID",
              "required": false,
              "enum": []
            },
            "userType": {
              "type": "string",
              "description": "用户类型 1-用户 2-客户 9-填写 {员工=User, 客户=Clientele, 其他=Other}",
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
              "description": "工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "创建工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_50",
      "tags": [
        "workorder"
      ]
    }
  }
}