{
  "path": "/building/{id}",
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
        "query": []
      },
      "summary": "查找房产",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET",
      "tags": [
        "base-building-building"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "address": {
              "type": "string",
              "description": "详细地址",
              "enum": []
            },
            "assetNo": {
              "type": "string",
              "description": "资产编号",
              "enum": []
            },
            "buildArea": {
              "type": "number",
              "description": "建筑面积",
              "enum": []
            },
            "buildingNo": {
              "type": "string",
              "description": "楼栋",
              "enum": []
            },
            "buildingUnit": {
              "type": "string",
              "description": "单元",
              "enum": []
            },
            "code": {
              "type": "string",
              "description": "编码",
              "enum": []
            },
            "completionTime": {
              "type": "string",
              "description": "竣工时间",
              "enum": []
            },
            "developer": {
              "type": "string",
              "description": "开发商",
              "enum": []
            },
            "displayName": {
              "type": "string",
              "description": "房产名称，不能重复，根据appId,tenentId，bizId维度不同，房产名称，不可以重复",
              "enum": []
            },
            "displayNameEn": {
              "type": "string",
              "description": "房产英文名",
              "enum": []
            },
            "endFloor": {
              "type": "number",
              "description": "结束楼层",
              "required": false,
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
            "floorArea": {
              "type": "number",
              "description": "楼层标准面积",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "房产ID，新增的时候不填写，修改时填写",
              "required": false,
              "enum": []
            },
            "latitude": {
              "type": "number",
              "description": "纬度",
              "enum": []
            },
            "longitude": {
              "type": "number",
              "description": "经度",
              "enum": []
            },
            "pathName": {
              "type": "string",
              "description": "路径名称",
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "roomRate": {
              "type": "number",
              "description": "得房率",
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "排序，必填",
              "required": false,
              "enum": []
            },
            "startFloor": {
              "type": "number",
              "description": "起始楼层",
              "required": false,
              "enum": []
            },
            "struct": {
              "type": "number",
              "description": "房产结构",
              "required": false,
              "enum": []
            },
            "timeZone": {
              "type": "string",
              "description": "所在时区",
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
      "summary": "更新房产",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT",
      "tags": [
        "base-building-building"
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
      "summary": "删除房产",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE",
      "tags": [
        "base-building-building"
      ]
    }
  }
}