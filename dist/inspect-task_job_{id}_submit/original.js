{
  "path": "/inspect-task/job/{id}/submit",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "mark": {
              "type": "string",
              "description": "标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "objects": {
              "type": "array",
              "valueType": {
                "type": "object",
                "contents": {
                  "type": "array",
                  "valueType": {
                    "type": "object",
                    "description": {
                      "type": "string",
                      "description": "故障描述",
                      "enum": []
                    },
                    "exception": {
                      "type": "string",
                      "description": "异常",
                      "enum": []
                    },
                    "exceptionHandleResult": {
                      "type": "string",
                      "description": "异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}",
                      "enum": [
                        "1",
                        "2"
                      ]
                    },
                    "exceptionHandleWay": {
                      "type": "string",
                      "description": "异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}",
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
                    "id": {
                      "type": "number",
                      "description": "内容id",
                      "required": false,
                      "enum": []
                    },
                    "mark": {
                      "type": "string",
                      "description": "标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}",
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
                    "result": {
                      "type": "string",
                      "description": "巡检结果",
                      "enum": []
                    },
                    "status": {
                      "type": "string",
                      "description": "状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}",
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
                  "required": false,
                  "description": "提交内容列表"
                },
                "facilityStatus": {
                  "type": "string",
                  "description": "设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}",
                  "enum": [
                    "1",
                    "2"
                  ]
                },
                "mark": {
                  "type": "string",
                  "description": "标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}",
                  "enum": [
                    "1",
                    "2"
                  ]
                },
                "patchEndTime": {
                  "type": "string",
                  "description": "补检结束时间 yyyy-MM-dd HH:mm:ss",
                  "enum": []
                },
                "patchStartTime": {
                  "type": "string",
                  "description": "补检开始时间 yyyy-MM-dd HH:mm:ss",
                  "enum": []
                },
                "realityStartTime": {
                  "type": "string",
                  "description": "实际开始时间 yyyy-MM-dd HH:mm:ss",
                  "enum": []
                },
                "status": {
                  "type": "string",
                  "description": "状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}",
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
              "required": false,
              "description": "提交对象列表"
            },
            "realityEndTime": {
              "type": "string",
              "description": "实际结束时间",
              "enum": []
            },
            "realityStartTime": {
              "type": "string",
              "description": "实际开始时间",
              "enum": []
            },
            "status": {
              "type": "string",
              "description": "状态：1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}",
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
            "name": "id",
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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
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