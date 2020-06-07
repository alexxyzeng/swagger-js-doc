{
  "path": "/project",
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
            "name": "projectName",
            "description": "项目名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "projectGroupName",
            "description": "项目组名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "projectStatus",
            "description": "项目状态: 1、未开始 2、服务中 3、预警 4、过期 {未开始=NotStart-1, 服务中=Serving-2, 预警中=Warning-3, 已过期=Expired-4}",
            "enum": []
          },
          {
            "type": "string",
            "name": "createTimeStartDate",
            "description": "创建开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "createTimeEndDate",
            "description": "创建结束时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "serviceStartDate",
            "description": "服务开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "serviceEndDate",
            "description": "服务结束时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "serviceEndDateStartDate",
            "description": "服务结束时间查询开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "serviceEndDateEndDate",
            "description": "服务结束时间查询结束时间",
            "enum": []
          },
          {
            "type": "number",
            "name": "maxUser",
            "description": "授权用户数",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "usedUser",
            "description": "使用用户数",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "项目编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "identifier",
            "description": "项目标识号",
            "enum": []
          },
          {
            "type": "string",
            "name": "bizType",
            "description": "项目业态",
            "enum": []
          },
          {
            "type": "number",
            "name": "geoId",
            "description": "地理位置ID，可以是省、市、区",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "area",
            "description": "项目(建筑)面积",
            "enum": []
          },
          {
            "type": "string",
            "name": "usedArea",
            "description": "项目(使用)面积",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "需排除项目ID",
            "name": "exIdx"
          }
        ]
      },
      "summary": "项目列表&搜索",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_3",
      "tags": [
        "base-project"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of项目信息"
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
    "post": {
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
        "path": [],
        "query": []
      },
      "summary": "新增项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_37",
      "tags": [
        "base-project"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of项目信息"
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