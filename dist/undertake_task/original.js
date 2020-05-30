{
  "path": "/undertake/task",
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
            "type": "string",
            "name": "name",
            "description": "查验任务名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "takeFrom",
            "description": "交验方",
            "enum": []
          },
          {
            "type": "string",
            "name": "takeOver",
            "description": "接管方",
            "enum": []
          },
          {
            "type": "string",
            "name": "checker",
            "description": "查验人",
            "enum": []
          },
          {
            "type": "string",
            "name": "accepter",
            "description": "验收人",
            "enum": []
          },
          {
            "type": "string",
            "name": "startStartTime",
            "description": "开始时间-区间开始",
            "enum": []
          },
          {
            "type": "string",
            "name": "startEndTime",
            "description": "开始时间-区间结束",
            "enum": []
          },
          {
            "type": "string",
            "name": "completedStartTime",
            "description": "完成时间-区间开始",
            "enum": []
          },
          {
            "type": "string",
            "name": "completedEndTime",
            "description": "完成时间-区间结束",
            "enum": []
          },
          {
            "type": "string",
            "name": "isException",
            "description": "是否异常 pc使用 是否枚举{否=No-0, 是=Yes-1}",
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
            "description": "状态 {已创建=Created-1, 处理中=InProgress-2, 已完成=Completed-3, 已验证=Acceptance-4}",
            "name": "status"
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "对象状态 app使用 {正常=Normal-1, 异常=Except-2, 整改=Rectification-3}",
            "name": "objectStatusSet"
          }
        ]
      },
      "summary": "承接查验-任务-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_63",
      "tags": [
        "undertake-task"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "accepterList": {
              "type": "array",
              "valueType": {
                "type": {
                  "type": "string",
                  "description": "验收人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}",
                  "enum": [
                    "1",
                    "2"
                  ]
                },
                "accepterId": {
                  "type": "number",
                  "description": "验收用户/工作组id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "验收人员"
            },
            "checkerList": {
              "type": "array",
              "valueType": {
                "type": {
                  "type": "string",
                  "description": "查验人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}",
                  "enum": [
                    "1",
                    "2"
                  ]
                },
                "checkerId": {
                  "type": "number",
                  "description": "查验用户/工作组id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "查验人员"
            },
            "description": {
              "type": "string",
              "description": "查验说明",
              "enum": []
            },
            "facilityList": {
              "type": "array",
              "valueType": {
                "type": "object",
                "facilityId": {
                  "type": "number",
                  "description": "设备ID",
                  "required": false,
                  "enum": []
                },
                "templatePoList": {
                  "type": "array",
                  "valueType": {
                    "type": "object",
                    "id": {
                      "type": "number",
                      "description": "模版id",
                      "required": false,
                      "enum": []
                    },
                    "name": {
                      "type": "string",
                      "description": "模版名称",
                      "enum": []
                    }
                  },
                  "required": false,
                  "description": "模版列表"
                }
              },
              "required": false,
              "description": "查验对象(设备)"
            },
            "name": {
              "type": "string",
              "description": "任务名称",
              "enum": []
            },
            "priorityId": {
              "type": "number",
              "description": "优先级id",
              "required": false,
              "enum": []
            },
            "siteList": {
              "type": "array",
              "valueType": {
                "type": "object",
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
                  "description": "空间ID",
                  "required": false,
                  "enum": []
                },
                "templatePoList": {
                  "type": "array",
                  "valueType": {
                    "type": "object",
                    "id": {
                      "type": "number",
                      "description": "模版id",
                      "required": false,
                      "enum": []
                    },
                    "name": {
                      "type": "string",
                      "description": "模版名称",
                      "enum": []
                    }
                  },
                  "required": false,
                  "description": "模版不能为空"
                }
              },
              "required": false,
              "description": "查验对象(位置)"
            },
            "slaId": {
              "type": "number",
              "description": "流程设置id",
              "required": false,
              "enum": []
            },
            "startTime": {
              "type": "string",
              "description": "开始时间",
              "enum": []
            },
            "takeFrom": {
              "type": "string",
              "description": "交验方",
              "enum": []
            },
            "takeOver": {
              "type": "string",
              "description": "接管方",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增承接查验-任务",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_49",
      "tags": [
        "undertake-task"
      ]
    }
  }
}