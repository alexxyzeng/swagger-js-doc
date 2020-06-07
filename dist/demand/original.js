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
            "name": "customerId",
            "description": "客户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "search",
            "description": "查询：编号、姓名、描述、需求类型、工单号、联系方式",
            "enum": []
          },
          {
            "type": "string",
            "name": "workorderCode",
            "description": "查询：工单编号",
            "enum": []
          },
          {
            "type": "string",
            "name": "hfmSearch",
            "description": "查询：编号、项目名称、描述、需求类型",
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "需求编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "username",
            "description": "保障人",
            "enum": []
          },
          {
            "type": "string",
            "name": "createByName",
            "description": "创建人",
            "enum": []
          },
          {
            "type": "string",
            "name": "demandTypeName",
            "description": "需求类型名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "demandTypeId",
            "description": "需求类型ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "description",
            "description": "需求内容",
            "enum": []
          },
          {
            "type": "string",
            "name": "evaluateStatus",
            "description": "是否评价 {未评价=No-1, 手动评价=YesHand-2, 自动评价=YesAuto-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "visitStatus",
            "description": "是否回访 {未回访=No-1, 已回访=Yes-2}",
            "enum": []
          },
          {
            "type": "string",
            "name": "isRefOrder",
            "description": "是否有关联的工单 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "是否关联工单列表 是否枚举{否=No-0, 是=Yes-1}",
            "name": "refOrders"
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "状态 {待审核=PendingCheck-1, 待处理=PendingDispose-2, 跟进中=Follow-3, 已建单=CreatedOrder-4, 待验收=PendingConfirm-5, 待评价=PendingEvaluate-6, 已完成=Done-7, 已评价=Evaluate-9, 已取消=Cancel-8}",
            "name": "statusList"
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "来源 {微信=Wechat-1, 手机=Phone-2, 邮件=Email-3, PC=Web-4}",
            "name": "sourceList"
          },
          {
            "type": "string",
            "name": "startDate",
            "description": "开始日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "endDate",
            "description": "结束日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "completeStartDate",
            "description": "工单完成开始日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "completeEndDate",
            "description": "工单完成结束日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "feedback",
            "description": "反馈意见",
            "enum": []
          },
          {
            "type": "number",
            "name": "responseDuration",
            "description": "响应时长",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "completionDuration",
            "description": "完成时长",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "additionalApproveStatus",
            "description": "追加处理审核状态 {待审核=Unchecked-1, 通过=Pass-2, 不通过=Reject-3}",
            "enum": []
          },
          {
            "type": "string",
            "name": "isReadCommon",
            "description": "需求评论是否已读 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          },
          {
            "type": "string",
            "name": "clientType",
            "description": "查询来源 1-web 2-h5 {PC浏览器=Web-1, 手机浏览器=H5-2}",
            "enum": []
          }
        ]
      },
      "summary": "需求-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_4",
      "tags": [
        "service-center-demand"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of需求-响应"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
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
            "departmentId": {
              "type": "number",
              "description": "部门id",
              "required": false,
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
            "fromEmail": {
              "type": "string",
              "description": "来源信箱",
              "enum": []
            },
            "isFromEmail": {
              "type": "string",
              "description": "是否来自邮件 是否枚举{否=No-0, 是=Yes-1}",
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
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "source": {
              "type": "string",
              "description": "来源 {微信=Wechat-1, 手机=Phone-2, 邮件=Email-3, PC=Web-4}",
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
                "type": "object",
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
              "required": false,
              "description": "空间位置列表"
            },
            "tel": {
              "type": "string",
              "description": "电话",
              "enum": []
            },
            "userType": {
              "type": "string",
              "description": "用户类型，0：其他；1：员工；2：客户； {员工=User-1, 客户=Clientele-2, 其他=Other-9}",
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
                "type": "object",
                "departmentId": {
                  "type": "number",
                  "description": "部门ID",
                  "required": false,
                  "enum": []
                },
                "description": {
                  "type": "string",
                  "description": "工单描述",
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
                  "description": "是否关联设备 是否枚举{否=No-0, 是=Yes-1}",
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
                "serviceTypeRefId": {
                  "type": "number",
                  "description": "服务类型关联ID",
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
                    "type": "object",
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
                  "required": false,
                  "description": "空间位置列表"
                },
                "workorderType": {
                  "type": "string",
                  "description": "工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
                  "enum": [
                    "1",
                    "2",
                    "3",
                    "4"
                  ]
                }
              },
              "required": false,
              "description": "工单信息列表"
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
      "operationId": "createUsingPOST_3",
      "tags": [
        "service-center-demand"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of需求-响应"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
}