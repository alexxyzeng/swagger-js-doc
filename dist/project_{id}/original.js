{
  "path": "/project/{id}",
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
      "summary": "项目详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET_1",
      "tags": [
        "base-project"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "address": {
              "type": "string",
              "description": "项目详细地址",
              "enum": []
            },
            "area": {
              "type": "number",
              "description": "项目(建筑)面积",
              "enum": []
            },
            "bizType": {
              "type": "string",
              "description": "项目业态",
              "enum": []
            },
            "code": {
              "type": "string",
              "description": "项目编码",
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
            "geoIds": {
              "type": "string",
              "description": "项目城市：ID",
              "enum": []
            },
            "geoLabels": {
              "type": "string",
              "description": "项目城市：显示名",
              "enum": []
            },
            "identifier": {
              "type": "string",
              "description": "项目标识号",
              "enum": []
            },
            "latitude": {
              "type": "string",
              "description": "项目所在纬度",
              "enum": []
            },
            "longitude": {
              "type": "string",
              "description": "项目所在经度",
              "enum": []
            },
            "maxUser": {
              "type": "number",
              "description": "授权用户数",
              "required": false,
              "enum": []
            },
            "projectGroupId": {
              "type": "number",
              "description": "项目组",
              "required": false,
              "enum": []
            },
            "projectName": {
              "type": "string",
              "description": "项目名称",
              "enum": []
            },
            "propertyTelephoneList": {
              "type": "array",
              "valueType": {
                "type": "string",
                "description": "",
                "enum": []
              },
              "required": false,
              "description": "物业电话"
            },
            "propertyTelephones": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "refPropertyPointId": {
              "type": "number",
              "description": "所属物业点id",
              "required": false,
              "enum": []
            },
            "refSupplierId": {
              "type": "number",
              "description": "所属物业公司ID",
              "required": false,
              "enum": []
            },
            "serviceEndDate": {
              "type": "string",
              "description": "服务结束时间",
              "enum": []
            },
            "serviceStartDate": {
              "type": "string",
              "description": "服务开始时间",
              "enum": []
            },
            "usedArea": {
              "type": "number",
              "description": "项目(使用)面积",
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
      "summary": "修改项目信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "patchUsingPUT_2",
      "tags": [
        "base-project"
      ]
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
      "summary": "删除项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_41",
      "tags": [
        "base-project"
      ]
    }
  }
}