{
  "path": "/floor",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "area": {
              "type": "number",
              "description": "管理面积",
              "enum": []
            },
            "code": {
              "type": "string",
              "description": "编码",
              "enum": []
            },
            "createTime": {
              "type": "string",
              "description": "最后的修改时间",
              "enum": []
            },
            "deleted": {
              "type": "number",
              "description": " 是否删除：0、未删除 1、已删除",
              "required": false,
              "enum": []
            },
            "displayName": {
              "type": "string",
              "description": "楼层名称",
              "enum": []
            },
            "files": {
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
            },
            "floorNo": {
              "type": "string",
              "description": "楼层编号",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "ID",
              "required": false,
              "enum": []
            },
            "interlayer": {
              "type": "number",
              "description": "夹层，1：是，0：否",
              "required": false,
              "enum": []
            },
            "level": {
              "type": "number",
              "description": "楼层",
              "required": false,
              "enum": []
            },
            "modifyTime": {
              "type": "string",
              "description": "最后的修改时间",
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
            "spBuildingId": {
              "type": "number",
              "description": "房产ID",
              "required": false,
              "enum": []
            },
            "timeZone": {
              "type": "string",
              "description": "所在时区，默认东8区",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新建楼层",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_11",
      "tags": [
        "base-building-floor"
      ]
    }
  }
}