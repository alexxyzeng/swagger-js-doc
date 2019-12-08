{
  "path": "/pm/maint",
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
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "项目id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "设备id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "设备分类id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "设备分类",
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
            "description": "大楼|楼层|房间 位置",
            "enum": []
          },
          {
            "type": "string",
            "description": "维保名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "周期单位 {天=1, 周=2, 月=3, 季=4, 年=5}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "是否滑动周期1-是；0-否 是否枚举{否=0, 是=1}",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "下次维保日期开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "下次维保日期结束",
            "enum": []
          },
          {
            "type": "number",
            "description": "是否自动生成工单 是否枚举{否=0, 是=1}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "设置状态0-暂停；1-启用 {启用=1, 暂停=2}",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "关键词查询，用于日历查询",
            "enum": []
          }
        ]
      },
      "summary": "维保规则列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_41",
      "tags": [
        "pm"
      ]
    },
    "post": {
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
                "required": false
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
              "description": "周期单位:1-天;2-周;3-月;4-季;5年 {天=Day, 周=Week, 月=Month, 季=Quarter, 年=Year}",
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
            "facilityTypes": {
              "type": "array",
              "valueType": {
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
              "description": "是否全年 0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isApprove": {
              "type": "string",
              "description": "是否审批 0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isAutoArchive": {
              "type": "string",
              "description": "是否自动存档 0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isAutoWorkorder": {
              "type": "string",
              "description": "是否自动生成工单 0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isCopySave": {
              "type": "string",
              "description": "是否拷贝保存 0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isFacilityQrcode": {
              "type": "string",
              "description": "是否通过扫码访问设备 0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSlideCycle": {
              "type": "string",
              "description": "是否滑动周期 1-是；0-否 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "materials": {
              "type": "array",
              "valueType": {
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
              "required": false
            },
            "name": {
              "type": "string",
              "description": "维保名称",
              "enum": []
            },
            "notices": {
              "type": "array",
              "valueType": {
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
                  "required": false
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
                  "description": "通知类型1-审批提醒；2-完成升级提醒；3-工作提醒 {审批提醒=Approve, 完成升级提醒=Promotion, 工作提醒=Work}",
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
                    "required": false
                  }
                }
              },
              "required": false
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
              "description": "维保时长单位:1-分钟;2-小时;3-天;4-月;5-年 {分钟=Min, 小时=Hour, 天=Day, 月=Month, 年=Year}",
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
              "required": false
            },
            "status": {
              "type": "string",
              "description": "计划状态 1-启用 2-暂停 {启用=Enable, 暂停=Pause}",
              "enum": [
                "1",
                "2"
              ]
            },
            "steps": {
              "type": "array",
              "valueType": {
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
              "required": false
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
                "cost": {
                  "type": "number",
                  "description": "花费",
                  "required": false,
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
              "required": false
            },
            "workTeams": {
              "type": "array",
              "valueType": {
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
              "required": false
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增设置",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_26",
      "tags": [
        "pm"
      ]
    }
  }
}