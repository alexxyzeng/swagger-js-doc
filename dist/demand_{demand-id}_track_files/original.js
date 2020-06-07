{
  "path": "/demand/{demand-id}/track/files",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "demand-id",
            "description": "demand-id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询需求跟进附件",
      "consumes": [
        "application/json"
      ],
      "operationId": "filesUsingGET",
      "tags": [
        "service-center-demand-track"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of需求文件"
          }
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
    },
    "put": {
      "parameters": {
        "body": [
          {
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
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "demand-id",
            "description": "demand-id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改需求跟进附件",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_8",
      "tags": [
        "service-center-demand-track"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofboolean"
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