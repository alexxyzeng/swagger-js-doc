{
  "path": "/undertake/task/{taskId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "taskId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "承接查验-任务-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET_3",
      "tags": [
        "undertake-task"
      ]
    },
    "put": {
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
        "path": [
          {
            "type": "number",
            "description": "taskId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改承接查验-任务-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_54",
      "tags": [
        "undertake-task"
      ]
    }
  }
}