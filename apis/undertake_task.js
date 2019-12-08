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
            "type": "string",
            "description": "查验任务名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "交验方",
            "enum": []
          },
          {
            "type": "string",
            "description": "接管方",
            "enum": []
          },
          {
            "type": "string",
            "description": "查验人",
            "enum": []
          },
          {
            "type": "string",
            "description": "开始时间-区间开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "开始时间-区间结束",
            "enum": []
          },
          {
            "type": "string",
            "description": "完成时间-区间开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "完成时间-区间结束",
            "enum": []
          },
          {
            "type": "number",
            "description": "是否异常 是否枚举{否=0, 是=1}",
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
          }
        ]
      },
      "summary": "承接查验-任务-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_53",
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
                "accepterId": {
                  "type": "number",
                  "description": "验收用户/工作组id",
                  "required": false,
                  "enum": []
                },
                "type": {
                  "type": "string",
                  "description": "验收人员类型 1-工作组 2-用户 {工作组=Group, 员工=User}",
                  "enum": [
                    "1",
                    "2"
                  ]
                }
              },
              "required": false
            },
            "checkerList": {
              "type": "array",
              "valueType": {
                "checkerId": {
                  "type": "number",
                  "description": "查验用户/工作组id",
                  "required": false,
                  "enum": []
                },
                "type": {
                  "type": "string",
                  "description": "查验人员类型 1-工作组 2-用户 {工作组=Group, 员工=User}",
                  "enum": [
                    "1",
                    "2"
                  ]
                }
              },
              "required": false
            },
            "description": {
              "type": "string",
              "description": "查验说明",
              "enum": []
            },
            "facilityList": {
              "type": "array",
              "valueType": {
                "facilityId": {
                  "type": "number",
                  "description": "设备ID",
                  "required": false,
                  "enum": []
                },
                "templateIds": {
                  "type": "array",
                  "valueType": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "required": false
                }
              },
              "required": false
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
                "templateIds": {
                  "type": "array",
                  "valueType": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "required": false
                }
              },
              "required": false
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
      "operationId": "createUsingPOST_42",
      "tags": [
        "undertake-task"
      ]
    }
  }
}