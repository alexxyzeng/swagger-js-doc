{
  "path": "/inspect-task/submit/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "巡检任务id",
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
            "sites": {
              "type": "array",
              "valueType": {
                "id": {
                  "type": "number",
                  "description": "唯一id",
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
                "name": {
                  "type": "string",
                  "description": "名称",
                  "enum": []
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
                "planId": {
                  "type": "number",
                  "description": "巡检计划ID",
                  "required": false,
                  "enum": []
                },
                "projectId": {
                  "type": "number",
                  "description": "项目id",
                  "required": false,
                  "enum": []
                },
                "siteId": {
                  "type": "number",
                  "description": "点位ID",
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
                },
                "status": {
                  "type": "string",
                  "description": "状态：1-未检 2-已检 {未完成=Unfinished, 已完成=Complete}",
                  "enum": [
                    "1",
                    "2"
                  ]
                },
                "taskId": {
                  "type": "number",
                  "description": "任务ID",
                  "required": false,
                  "enum": []
                }
              },
              "required": false
            },
            "status": {
              "type": "string",
              "description": "状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart, 进行中=Process, 按时完成=Complate, 延期完成=DelayComplate, 未巡检=NoPolling}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
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
      "summary": "提交巡检任务",
      "consumes": [
        "application/json"
      ],
      "operationId": "submitUsingPUT",
      "tags": [
        "inspect-task"
      ]
    }
  }
}