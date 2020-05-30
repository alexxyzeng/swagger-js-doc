{
  "path": "/space",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "code": {
              "type": "string",
              "description": "编码",
              "enum": []
            },
            "displayName": {
              "type": "string",
              "description": "空间名称，同一楼层不重复",
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
              "description": "空间ID，新增时不可填写，修改时填写",
              "required": false,
              "enum": []
            },
            "pathName": {
              "type": "string",
              "description": "层级名称",
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "排序",
              "required": false,
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层ID，不能为空",
              "required": false,
              "enum": []
            },
            "spaceNo": {
              "type": "string",
              "description": "房间编号",
              "enum": []
            },
            "spaceType": {
              "type": "number",
              "description": "空间类型：1、房间，默认 1",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新建空间",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_43",
      "tags": [
        "base-building-space"
      ]
    }
  }
}