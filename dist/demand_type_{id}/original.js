{
  "path": "/demand/type/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "需求类型-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_8",
      "tags": [
        "service-center-demand-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of需求类型-响应"
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
            "code": {
              "type": "string",
              "description": "需求类型编码",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "需求描述",
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
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "isRefOrder": {
              "type": "string",
              "description": "是否关联工单 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isVisiblePhotograph": {
              "type": "string",
              "description": "随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "parentId": {
              "type": "number",
              "description": "父ID",
              "required": false,
              "enum": []
            },
            "pathName": {
              "type": "string",
              "description": "全称",
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "排序",
              "required": false,
              "enum": []
            },
            "typeName": {
              "type": "string",
              "description": "类型名称",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改需求类型-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_9",
      "tags": [
        "service-center-demand-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of需求类型-响应"
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
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_6",
      "tags": [
        "service-center-demand-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  }
}