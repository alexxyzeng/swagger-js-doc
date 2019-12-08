{
  "path": "/demand",
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
            "description": "客户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "查询：编号、姓名、描述、需求类型、工单号、联系方式",
            "enum": []
          },
          {
            "type": "string",
            "description": "需求编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "保障人",
            "enum": []
          },
          {
            "type": "string",
            "description": "创建人",
            "enum": []
          },
          {
            "type": "string",
            "description": "需求类型名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "需求内容",
            "enum": []
          },
          {
            "type": "number",
            "description": "是否评价 {未评价=1, 手动评价=2, 自动评价=3}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "是否回访 {未回访=1, 已回访=2}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "是否关联工单 是否枚举{否=0, 是=1}",
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
            "description": "开始日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "结束日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "工单完成开始日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "工单完成结束日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "反馈意见",
            "enum": []
          }
        ]
      },
      "summary": "需求-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_3",
      "tags": [
        "service-center-demand"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "appellation": {
              "type": "string",
              "description": "称谓",
              "enum": []
            },
            "company": {
              "type": "string",
              "description": "公司名称",
              "enum": []
            },
            "customerId": {
              "type": "number",
              "description": "客户ID",
              "required": false,
              "enum": []
            },
            "demandTypeRefId": {
              "type": "number",
              "description": "需求类型改关联ID",
              "required": false,
              "enum": []
            },
            "department": {
              "type": "string",
              "description": "部门",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "需求描述",
              "enum": []
            },
            "email": {
              "type": "string",
              "description": "电子信箱",
              "enum": []
            },
            "employeeId": {
              "type": "number",
              "description": "员工ID",
              "required": false,
              "enum": []
            },
            "expectEndTime": {
              "type": "string",
              "description": "预计结束时间",
              "enum": []
            },
            "expectStartTime": {
              "type": "string",
              "description": "预计开始时间",
              "enum": []
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
            "fromEmail": {
              "type": "string",
              "description": "来源信箱",
              "enum": []
            },
            "isFromEmail": {
              "type": "string",
              "description": "是否来自邮件 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "phone": {
              "type": "string",
              "description": "手机号",
              "enum": []
            },
            "position": {
              "type": "string",
              "description": "职位",
              "enum": []
            },
            "source": {
              "type": "string",
              "description": "来源 {微信=Wechat, 手机=Phone, 邮件=Email, PC=Web}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            },
            "spaces": {
              "type": "array",
              "valueType": {
                "id": {
                  "type": "number",
                  "description": "由程序分配的唯一ID",
                  "required": false,
                  "enum": []
                },
                "spBuildingId": {
                  "type": "number",
                  "description": "大楼ID",
                  "required": false,
                  "enum": []
                },
                "spBuildingName": {
                  "type": "string",
                  "description": "大楼名称",
                  "enum": []
                },
                "spFloorId": {
                  "type": "number",
                  "description": "楼层ID",
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
                  "description": "空间ID",
                  "required": false,
                  "enum": []
                },
                "spSpaceName": {
                  "type": "string",
                  "description": "空间名称",
                  "enum": []
                }
              },
              "required": false
            },
            "tel": {
              "type": "string",
              "description": "电话",
              "enum": []
            },
            "userType": {
              "type": "string",
              "description": "用户类型，0：其他；1：员工；2：客户； {员工=User, 客户=Clientele, 其他=Other}",
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
            "workorderList": {
              "type": "array",
              "valueType": {
                "facilities": {
                  "type": "array",
                  "valueType": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "required": false
                },
                "isRefFacility": {
                  "type": "string",
                  "description": "是否关联设备 是否枚举{否=No, 是=Yes}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "priorityId": {
                  "type": "number",
                  "description": "优先级ID",
                  "required": false,
                  "enum": []
                },
                "serviceTypeId": {
                  "type": "number",
                  "description": "服务类型ID",
                  "required": false,
                  "enum": []
                },
                "slaId": {
                  "type": "number",
                  "description": "SLA",
                  "required": false,
                  "enum": []
                },
                "spaces": {
                  "type": "array",
                  "valueType": {
                    "id": {
                      "type": "number",
                      "description": "由程序分配的唯一ID",
                      "required": false,
                      "enum": []
                    },
                    "spBuildingId": {
                      "type": "number",
                      "description": "大楼ID",
                      "required": false,
                      "enum": []
                    },
                    "spBuildingName": {
                      "type": "string",
                      "description": "大楼名称",
                      "enum": []
                    },
                    "spFloorId": {
                      "type": "number",
                      "description": "楼层ID",
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
                      "description": "空间ID",
                      "required": false,
                      "enum": []
                    },
                    "spSpaceName": {
                      "type": "string",
                      "description": "空间名称",
                      "enum": []
                    }
                  },
                  "required": false
                },
                "workorderType": {
                  "type": "string",
                  "description": "工单类型 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}",
                  "enum": [
                    "1",
                    "2",
                    "3",
                    "4"
                  ]
                }
              },
              "required": false
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增需求",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_2",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}