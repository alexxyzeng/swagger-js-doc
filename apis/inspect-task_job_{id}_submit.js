{
  "path": "/inspect-task/job/{id}/submit",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "mark": {
              "type": "string",
              "description": "标签 1-正常 2-异常 {正常=Normal, 异常=AbNormal}",
              "enum": [
                "1",
                "2"
              ]
            },
            "objects": {
              "type": "array",
              "valueType": {
                "contents": {
                  "type": "array",
                  "valueType": {
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
                    "faultDescription": {
                      "type": "string",
                      "description": "故障描述",
                      "enum": []
                    },
                    "id": {
                      "type": "number",
                      "description": "内容id",
                      "required": false,
                      "enum": []
                    },
                    "mark": {
                      "type": "string",
                      "description": "标签 1-正常 2-异常 {正常=Normal, 异常=AbNormal}",
                      "enum": [
                        "1",
                        "2"
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
                    "picture": {
                      "type": "string",
                      "description": "图片",
                      "enum": []
                    },
                    "result": {
                      "type": "string",
                      "description": "巡检结果",
                      "enum": []
                    },
                    "status": {
                      "type": "string",
                      "description": "状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart, 已检=Complete, 漏检=Miss, 补检=Supplement}",
                      "enum": [
                        "1",
                        "2",
                        "3",
                        "4"
                      ]
                    },
                    "taskObjectId": {
                      "type": "number",
                      "description": "任务对象ID",
                      "required": false,
                      "enum": []
                    }
                  },
                  "required": false
                },
                "mark": {
                  "type": "string",
                  "description": "标签 1-正常 2-异常 {正常=Normal, 异常=AbNormal}",
                  "enum": [
                    "1",
                    "2"
                  ]
                },
                "status": {
                  "type": "string",
                  "description": "状态：1-未检 2-已检 {未检=Unstart, 已检=Complete}",
                  "enum": [
                    "1",
                    "2"
                  ]
                },
                "taskObjectId": {
                  "type": "number",
                  "description": "任务对象ID",
                  "required": false,
                  "enum": []
                }
              },
              "required": false
            },
            "status": {
              "type": "string",
              "description": "状态：1-未完成 2-已完成 {未完成=Unfinished, 已完成=Complete}",
              "enum": [
                "1",
                "2"
              ]
            },
            "taskJobId": {
              "type": "number",
              "description": "巡检任务-工作任务ID",
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
      "summary": "巡检任务-工作任务-提交",
      "consumes": [
        "application/json"
      ],
      "operationId": "submitUsingPUT_1",
      "tags": [
        "inspect-task"
      ]
    }
  }
}