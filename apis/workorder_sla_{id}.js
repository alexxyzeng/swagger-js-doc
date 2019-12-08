{
  "path": "/workorder/sla/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询sla详情信息-byId",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET_2",
      "tags": [
        "workorder-sla"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "autoArchive": {
              "type": "string",
              "description": "是否自动存档 0-否 1-是 默认值为0 是否枚举{否=No, 是=Yes}",
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
            "priorityDtos": {
              "type": "array",
              "valueType": {
                "deliveryMethod": {
                  "type": "string",
                  "description": "1-是否自动派工 2-是否智能派工 3-是否手动派工 {自动派工=Auto, 智能派工=Intelligent, 手动派工=Manual}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                },
                "executorIds": {
                  "type": "array",
                  "valueType": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "required": false
                },
                "isAllowScramble": {
                  "type": "string",
                  "description": "是否允许抢单 0-否 1-是 是否枚举{否=No, 是=Yes}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "notificationDtos": {
                  "type": "array",
                  "valueType": {
                    "fixNotifyRole": {
                      "type": "string",
                      "description": "",
                      "enum": []
                    },
                    "fixNotifyRoleSet": {
                      "type": "array",
                      "valueType": {
                        "type": "string",
                        "description": "",
                        "enum": [
                          "1",
                          "2",
                          "3",
                          "4"
                        ]
                      },
                      "required": false
                    },
                    "id": {
                      "type": "number",
                      "description": "优先级通知Id，更新时需将原id传回",
                      "required": false,
                      "enum": []
                    },
                    "intervalTime": {
                      "type": "number",
                      "description": "间隔时间 事件升级时，间隔时间不能为空",
                      "required": false,
                      "enum": []
                    },
                    "name": {
                      "type": "string",
                      "description": "通知名称",
                      "enum": []
                    },
                    "noticeMethods": {
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
                    "notificationType": {
                      "type": "string",
                      "description": "通知类型: 1-事件升级 2-固定提醒 3-自定义提醒 {事件升级=Event, 固定通知=Fix, 自定义通知=Customize}",
                      "enum": [
                        "1",
                        "2",
                        "3"
                      ]
                    },
                    "notifyIds": {
                      "type": "array",
                      "valueType": {
                        "type": "number",
                        "description": "",
                        "required": false,
                        "enum": []
                      },
                      "required": false
                    },
                    "notifyType": {
                      "type": "string",
                      "description": "通知用户类型: 1-工作组 2-员工 事件升级及自定义提醒，此项不能为空 {工作组=Group, 员工=User}",
                      "enum": [
                        "1",
                        "2"
                      ]
                    },
                    "timeUnit": {
                      "type": "string",
                      "description": "间隔时间单位 1-分钟 2-小时 3-天 事件升级时，间隔时间单位不能为空 {分钟=Min, 小时=Hour, 天=Day}",
                      "enum": [
                        "1",
                        "2",
                        "3"
                      ]
                    }
                  },
                  "required": false
                },
                "scrambleTime": {
                  "type": "number",
                  "description": "允许抢单时间 允许抢单时该字段不能为空",
                  "required": false,
                  "enum": []
                },
                "timeUnit": {
                  "type": "string",
                  "description": "抢单时间单位 1-分钟 2-小时 3-天 允许抢单时该字段不能为空 {分钟=Min, 小时=Hour, 天=Day}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                },
                "woPriorityId": {
                  "type": "number",
                  "description": "优先级id",
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
            },
            "spBuildingId": {
              "type": "number",
              "description": "大楼ID",
              "required": false,
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层ID",
              "required": false,
              "enum": []
            },
            "spSpaceId": {
              "type": "number",
              "description": "房间ID",
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
              "description": "关联服务类型id 集团版必传",
              "required": false,
              "enum": []
            },
            "woType": {
              "type": "string",
              "description": "工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "更新sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_47",
      "tags": [
        "workorder-sla"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_48",
      "tags": [
        "workorder-sla"
      ]
    }
  }
}