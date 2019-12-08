{
  "path": "/material/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": [
          {
            "type": "number",
            "description": "仓库ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "库存物资-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_31",
      "tags": [
        "warehouse"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "brand": {
              "type": "string",
              "description": "物资品牌",
              "enum": []
            },
            "code": {
              "type": "string",
              "description": "物资编码",
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
            "model": {
              "type": "string",
              "description": "物资型号",
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "物资名称",
              "enum": []
            },
            "price": {
              "type": "number",
              "description": "核定价格",
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "safeStock": {
              "type": "number",
              "description": "安全库存",
              "enum": []
            },
            "unit": {
              "type": "string",
              "description": "物资单位",
              "enum": []
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
      "summary": "修改库存物资-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_39",
      "tags": [
        "warehouse"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
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
      "summary": "删除库存物资",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_37",
      "tags": [
        "warehouse"
      ]
    }
  }
}