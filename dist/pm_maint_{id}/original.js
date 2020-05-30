{
  "path": "/pm/maint/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "维保规则-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_33",
      "tags": [
        "pm"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "approver": {
              "approver": {
                "type": "array",
                "valueType": {
                  "type": "number",
                  "description": "",
                  "required": false,
                  "enum": []
                },
                "required": false,
                "description": "审批人id列表"
              },
              "empty": {
                "type": "boolean",
                "description": "",
                "enum": []
              }
            },
            "beginMonth": {
              "type": "number",
              "description": "维保时间开始",
              "required": false,
              "enum": []
            },
            "cycle": {
              "type": "number",
              "description": "维保周期",
              "required": false,
              "enum": []
            },
            "cycleUnit": {
              "type": "string",
              "description": "周期单位:1-天;2-周;3-月;4-季;5年 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            },
            "effect": {
              "type": "string",
              "description": "影响",
              "enum": []
            },
            "endMonth": {
              "type": "number",
              "description": "维保时间结束",
              "required": false,
              "enum": []
            },
            "excludeFacilityIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "不维保设备id"
            },
            "facilityIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "设备id列表"
            },
            "facilityTypes": {
              "type": "array",
              "valueType": {
                "type": "object",
                "facilityTypeId": {
                  "type": "number",
                  "description": "设备类型ID",
                  "required": false,
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "唯一id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "维保设备分类"
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
            "firstDate": {
              "type": "string",
              "description": "首次维保日期",
              "enum": []
            },
            "generateTime": {
              "hour": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "minute": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "nano": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "second": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              }
            },
            "isAllYear": {
              "type": "string",
              "description": "是否全年 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isApprove": {
              "type": "string",
              "description": "是否审批 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isAutoArchive": {
              "type": "string",
              "description": "是否自动存档 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isAutoWorkorder": {
              "type": "string",
              "description": "是否自动生成工单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isCopySave": {
              "type": "string",
              "description": "是否拷贝保存 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isFacilityQrcode": {
              "type": "string",
              "description": "是否通过扫码访问设备 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSlideCycle": {
              "type": "string",
              "description": "是否滑动周期 1-是；0-否 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "materials": {
              "type": "array",
              "valueType": {
                "type": "object",
                "id": {
                  "type": "number",
                  "description": "唯一id",
                  "required": false,
                  "enum": []
                },
                "maintId": {
                  "type": "number",
                  "description": "",
                  "required": false,
                  "enum": []
                },
                "materialBrand": {
                  "type": "string",
                  "description": "物资品牌",
                  "enum": []
                },
                "materialCode": {
                  "type": "string",
                  "description": "物资编码",
                  "enum": []
                },
                "materialId": {
                  "type": "number",
                  "description": "物资id",
                  "required": false,
                  "enum": []
                },
                "materialModel": {
                  "type": "string",
                  "description": "物资型号",
                  "enum": []
                },
                "materialName": {
                  "type": "string",
                  "description": "物资名称",
                  "enum": []
                },
                "materialUnit": {
                  "type": "number",
                  "description": "物资单位",
                  "required": false,
                  "enum": []
                },
                "projectId": {
                  "type": "number",
                  "description": "",
                  "required": false,
                  "enum": []
                },
                "reserveCount": {
                  "type": "number",
                  "description": "预定数量",
                  "required": false,
                  "enum": []
                },
                "storeId": {
                  "type": "number",
                  "description": "仓库id",
                  "required": false,
                  "enum": []
                },
                "storeName": {
                  "type": "string",
                  "description": "仓库名称",
                  "enum": []
                },
                "workTeamId": {
                  "type": "number",
                  "description": "工作组id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "维保物资"
            },
            "name": {
              "type": "string",
              "description": "维保名称",
              "enum": []
            },
            "notices": {
              "type": "array",
              "valueType": {
                "type": "object",
                "advanceDays": {
                  "type": "number",
                  "description": "提前天数",
                  "required": false,
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "唯一id",
                  "required": false,
                  "enum": []
                },
                "messageTypes": {
                  "type": "array",
                  "valueType": {
                    "type": "string",
                    "description": "",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5"
                    ]
                  },
                  "required": false,
                  "description": "消息类型1-站内信；2-移动推送；3-短信；4-邮件 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}"
                },
                "noticeTime": {
                  "hour": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "minute": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "nano": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "second": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  }
                },
                "noticeType": {
                  "type": "string",
                  "description": "通知类型1-审批提醒；2-完成升级提醒；3-工作提醒 {审批提醒=Approve-1, 完成升级提醒=Promotion-2, 工作提醒=Work-3}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                },
                "receiveId": {
                  "receiver": {
                    "type": "array",
                    "valueType": {
                      "type": "number",
                      "description": "",
                      "required": false,
                      "enum": []
                    },
                    "required": false,
                    "description": "接收id列表"
                  }
                }
              },
              "required": false,
              "description": "维保提醒"
            },
            "oriMaintId": {
              "type": "number",
              "description": "拷贝前维保设置id",
              "required": false,
              "enum": []
            },
            "predictTime": {
              "type": "number",
              "description": "维保时长",
              "required": false,
              "enum": []
            },
            "predictUnit": {
              "type": "string",
              "description": "维保时长单位:1-分钟;2-小时;3-天;4-月;5-年 {分钟=Min-1, 小时=Hour-2, 天=Day-3, 月=Month-4, 年=Year-5}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            },
            "priorityName": {
              "type": "string",
              "description": "优先级名称：一般、紧急、紧急重要",
              "enum": []
            },
            "spaces": {
              "type": "array",
              "valueType": {
                "type": "object",
                "id": {
                  "type": "number",
                  "description": "唯一id",
                  "required": false,
                  "enum": []
                },
                "spBuildingId": {
                  "type": "number",
                  "description": "大厦id",
                  "required": false,
                  "enum": []
                },
                "spBuildingName": {
                  "type": "string",
                  "description": "大厦名称",
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
                  "description": "空间id",
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
              "description": "维保空间"
            },
            "status": {
              "type": "string",
              "description": "计划状态 1-启用 2-暂停 {启用=Enable-1, 暂停=Pause-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "steps": {
              "type": "array",
              "valueType": {
                "type": "object",
                "id": {
                  "type": "number",
                  "description": "唯一id",
                  "required": false,
                  "enum": []
                },
                "stepName": {
                  "type": "string",
                  "description": "步骤",
                  "enum": []
                },
                "workTeamId": {
                  "type": "number",
                  "description": "工作组id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "维保步骤"
            },
            "storeId": {
              "type": "number",
              "description": "仓库id",
              "required": false,
              "enum": []
            },
            "storeName": {
              "type": "string",
              "description": "仓库名称",
              "enum": []
            },
            "tools": {
              "type": "array",
              "valueType": {
                "type": "object",
                "cost": {
                  "type": "number",
                  "description": "花费",
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "唯一id",
                  "required": false,
                  "enum": []
                },
                "toolCount": {
                  "type": "number",
                  "description": "数量",
                  "required": false,
                  "enum": []
                },
                "toolModel": {
                  "type": "string",
                  "description": "工具型号",
                  "enum": []
                },
                "toolName": {
                  "type": "string",
                  "description": "工具名称",
                  "enum": []
                }
              },
              "required": false,
              "description": "维保工具"
            },
            "workTeams": {
              "type": "array",
              "valueType": {
                "type": "object",
                "id": {
                  "type": "number",
                  "description": "唯一id",
                  "required": false,
                  "enum": []
                },
                "workTeamId": {
                  "type": "number",
                  "description": "工作组id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "工作组"
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改设置",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_41",
      "tags": [
        "pm"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除设置",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_33",
      "tags": [
        "pm"
      ]
    }
  }
}