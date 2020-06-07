{
  "path": "/workorder/sla/match",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "orgDepartmentId": {
              "type": "number",
              "description": "部门id",
              "required": false,
              "enum": []
            },
            "spaceDtos": {
              "type": "array",
              "valueType": {
                "type": "object",
                "description": {
                  "type": "string",
                  "description": "处理方式",
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
                "spBuildingId": {
                  "type": "number",
                  "description": "大楼id",
                  "required": false,
                  "enum": []
                },
                "spFloorId": {
                  "type": "number",
                  "description": "楼层id",
                  "required": false,
                  "enum": []
                },
                "spSpaceId": {
                  "type": "number",
                  "description": "房间id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "工单位置"
            },
            "woServiceTypeId": {
              "type": "number",
              "description": "服务类型id",
              "required": false,
              "enum": []
            },
            "woServiceTypeRefId": {
              "type": "number",
              "description": "关联服务类型id",
              "required": false,
              "enum": []
            },
            "woType": {
              "type": "string",
              "description": "工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "匹配sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "matchUsingPOST",
      "tags": [
        "workorder-sla"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-sla匹配-响应"
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