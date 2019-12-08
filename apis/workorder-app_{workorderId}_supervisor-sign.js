{
  "path": "/workorder-app/{workorderId}/supervisor-sign",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "fileTypes": {
              "type": "array",
              "valueType": {
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
                  "description": "文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}",
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
              "required": false
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "主管签字",
      "consumes": [
        "application/json"
      ],
      "operationId": "supervisorSignUsingPUT",
      "tags": [
        "workorder-app"
      ]
    }
  }
}