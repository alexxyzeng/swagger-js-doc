{
  "path": "/energy/consumption/record/import",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "file": {
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
            "operate": {
              "type": "string",
              "description": "操作 {下载模版=DownloadTemplate-0, 导出数据=Export-1, 新增=Add-2, 删除=Delete-3, 覆盖=Override-4, 增量导入=IncrAdd-5, 重新导入=Reimport-6}",
              "enum": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
              ]
            },
            "taskCode": {
              "type": "string",
              "description": "文档编号",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "能耗记录批量导入",
      "consumes": [
        "application/json"
      ],
      "operationId": "exportUsingPOST",
      "tags": [
        "energy-consumption-record"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfExecResultDto"
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