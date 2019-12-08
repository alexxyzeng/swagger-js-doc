{
  "path": "/inspect-task/content/{id}",
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
      "summary": "巡检任务-内容-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_20",
      "tags": [
        "inspect-task"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "内容",
              "enum": []
            },
            "contentId": {
              "type": "number",
              "description": "内容ID",
              "required": false,
              "enum": []
            },
            "defaultVal": {
              "type": "string",
              "description": "默认值",
              "enum": []
            },
            "exception": {
              "type": "string",
              "description": "异常",
              "enum": []
            },
            "exceptionHandleResult": {
              "type": "string",
              "description": "异常处理结果：1-已处理 2-未处理 {已处理=Dispose, 未处理=Undispose}",
              "enum": [
                "1",
                "2"
              ]
            },
            "exceptionHandleWay": {
              "type": "string",
              "description": "异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation, 报修工单=Workorder}",
              "enum": [
                "1",
                "2"
              ]
            },
            "exceptions": {
              "exceptions": {
                "type": "array",
                "valueType": {
                  "type": "string",
                  "description": "",
                  "enum": []
                },
                "required": false
              }
            },
            "facilityId": {
              "type": "number",
              "description": "设备ID",
              "required": false,
              "enum": []
            },
            "faultDescription": {
              "type": "string",
              "description": "故障描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "isCustom": {
              "type": "string",
              "description": "是否自定义 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "jobId": {
              "type": "number",
              "description": "工作任务ID",
              "required": false,
              "enum": []
            },
            "jobType": {
              "type": "string",
              "description": "任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize, 设备巡检=Facility}",
              "enum": [
                "1",
                "2"
              ]
            },
            "mark": {
              "type": "string",
              "description": "标签 1-正常 2-异常 {正常=Normal, 异常=AbNormal}",
              "enum": [
                "1",
                "2"
              ]
            },
            "model": {
              "type": "string",
              "description": "模式：1-不限 2-夏季 3-冬季 {常规=Normal, 夏季=Summer, 冬季=winter}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "operationTime": {
              "type": "string",
              "description": "操作时间",
              "enum": []
            },
            "operator": {
              "type": "number",
              "description": "操作人",
              "required": false,
              "enum": []
            },
            "options": {
              "inputRange": {
                "ceiling": {
                  "type": "number",
                  "description": "上限",
                  "enum": []
                },
                "lower": {
                  "type": "number",
                  "description": "下限",
                  "enum": []
                }
              },
              "options": {
                "type": "array",
                "valueType": {
                  "isRight": {
                    "type": "boolean",
                    "description": "选项是否正确",
                    "enum": []
                  },
                  "option": {
                    "type": "string",
                    "description": "选项值",
                    "enum": []
                  }
                },
                "required": false
              }
            },
            "picture": {
              "type": "string",
              "description": "图片",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "result": {
              "type": "string",
              "description": "巡检结果",
              "enum": []
            },
            "runStatus": {
              "type": "string",
              "description": "运行状态：1-不限 2-在线 3-停用 {不限=Unlimit, 在线=Online, 停用=Stop}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "sort": {
              "type": "number",
              "description": "顺序",
              "required": false,
              "enum": []
            },
            "status": {
              "type": "string",
              "description": "状态：1-正常 2-异常 3-漏检 4-补检 {未检=Unstart, 已检=Complete, 漏检=Miss, 补检=Supplement}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            },
            "taskId": {
              "type": "number",
              "description": "任务ID",
              "required": false,
              "enum": []
            },
            "taskJobId": {
              "type": "number",
              "description": "任务点位工作任务ID",
              "required": false,
              "enum": []
            },
            "taskObjectId": {
              "type": "number",
              "description": "任务对象ID",
              "required": false,
              "enum": []
            },
            "templateId": {
              "type": "number",
              "description": "模板ID",
              "required": false,
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "类型：1-输入 2-选择 {输入=Input, 选择=Select}",
              "enum": [
                "1",
                "2"
              ]
            },
            "unit": {
              "type": "number",
              "description": "单位",
              "required": false,
              "enum": []
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
      "summary": "修改巡检任务-内容-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_27",
      "tags": [
        "inspect-task"
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
      "summary": "删除巡检任务-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_26",
      "tags": [
        "inspect-task"
      ]
    }
  }
}