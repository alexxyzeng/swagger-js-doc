{
  "path": "/material",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "物资编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "物资名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "brand",
            "description": "物资品牌",
            "enum": []
          },
          {
            "type": "string",
            "name": "model",
            "description": "物资型号",
            "enum": []
          },
          {
            "type": "string",
            "name": "unit",
            "description": "物资单位",
            "enum": []
          },
          {},
          {},
          {
            "type": "string",
            "name": "remark",
            "description": "备注",
            "enum": []
          },
          {
            "type": "string",
            "name": "hybrid",
            "description": "编码或名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "warehouseId",
            "description": "仓库ID,查询是否有库存时使用",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "库存物资-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_43",
      "tags": [
        "warehouse"
      ]
    },
    "post": {
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
        "path": [],
        "query": []
      },
      "summary": "新增库存物资",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_29",
      "tags": [
        "warehouse"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "idx",
            "name": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除库存物资",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_11",
      "tags": [
        "warehouse"
      ]
    }
  }
}