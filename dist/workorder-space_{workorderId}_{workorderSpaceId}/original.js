{
  "path": "/workorder-space/{workorderId}/{workorderSpaceId}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
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
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "workorderId",
            "description": "workorderId",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "name": "workorderSpaceId",
            "description": "workorderSpaceId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "更新工单空间位置",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_63",
      "tags": [
        "workorder-space"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-空间位置表-响应"
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