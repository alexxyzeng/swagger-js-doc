{
  "path": "/undertake/app/checked/{objectId}/{objectType}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "contents": {
              "type": "array",
              "valueType": {
                "type": "object",
                "andGetIsException": {
                  "content": {
                    "type": "string",
                    "description": "查验内容",
                    "enum": []
                  },
                  "createTime": {
                    "type": "string",
                    "description": "创建时间",
                    "enum": []
                  },
                  "defaultVal": {
                    "type": "string",
                    "description": "默认值",
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
                    "description": "唯一id",
                    "required": false,
                    "enum": []
                  },
                  "isException": {
                    "type": "string",
                    "description": "是否异常 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
                    "enum": [
                      "0",
                      "1"
                    ]
                  },
                  "modifyTime": {
                    "type": "string",
                    "description": "最后修改时间",
                    "enum": []
                  },
                  "objectId": {
                    "type": "number",
                    "description": "对象id",
                    "required": false,
                    "enum": []
                  },
                  "objectType": {
                    "type": "string",
                    "description": "对象类型：1-位置 2-设备 {位置=Site-1, 设备=Facility-2}",
                    "enum": [
                      "1",
                      "2"
                    ]
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
                        "type": "object",
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
                      "required": false,
                      "description": ""
                    }
                  },
                  "projectId": {
                    "type": "number",
                    "description": "项目id",
                    "required": false,
                    "enum": []
                  },
                  "result": {
                    "type": "string",
                    "description": "查验结果",
                    "enum": []
                  },
                  "resultDesc": {
                    "type": "string",
                    "description": "结果描述",
                    "enum": []
                  },
                  "taskId": {
                    "type": "number",
                    "description": "承接查验任务id",
                    "required": false,
                    "enum": []
                  },
                  "type": {
                    "type": "string",
                    "description": "类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}",
                    "enum": [
                      "1",
                      "2"
                    ]
                  },
                  "unit": {
                    "type": "string",
                    "description": "单位",
                    "enum": []
                  }
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
                  "description": "查验内容id",
                  "required": false,
                  "enum": []
                },
                "result": {
                  "type": "string",
                  "description": "查验结果，不带单位",
                  "enum": []
                },
                "resultDesc": {
                  "type": "string",
                  "description": "记录",
                  "enum": []
                }
              },
              "required": false,
              "description": "查验内容完成列表"
            },
            "exceptionNum": {
              "type": "number",
              "description": "异常查验数量",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "objectId",
            "description": "objectId",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "name": "objectType",
            "description": "objectType",
            "enum": [
              "1",
              "2"
            ]
          }
        ],
        "query": []
      },
      "summary": "对象完成查验",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkedByObjectIdUsingPUT",
      "tags": [
        "undertake-app"
      ]
    }
  }
}