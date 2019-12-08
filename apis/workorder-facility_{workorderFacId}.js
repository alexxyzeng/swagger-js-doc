{
  "path": "/workorder-facility/{workorderFacId}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "createTime": {
              "type": "string",
              "description": "创建时间",
              "enum": []
            },
            "facFacilityId": {
              "type": "number",
              "description": "设备id",
              "required": false,
              "enum": []
            },
            "facilityCode": {
              "type": "string",
              "description": "设备编码",
              "enum": []
            },
            "facilityName": {
              "type": "string",
              "description": "设备名称",
              "enum": []
            },
            "facilityType": {
              "type": "string",
              "description": "系统分类",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "modifyTime": {
              "type": "string",
              "description": "最后的修改时间",
              "enum": []
            },
            "mountSpace": {
              "type": "string",
              "description": "位置",
              "enum": []
            },
            "processDesc": {
              "type": "string",
              "description": "处理方式",
              "enum": []
            },
            "processFiles": {
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
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "siteDesc": {
              "type": "string",
              "description": "现场描述",
              "enum": []
            },
            "siteFiles": {
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
            "woWorkorderId": {
              "type": "number",
              "description": "工单id",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "workorderFacId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改工单对应的设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_58",
      "tags": [
        "workorder-facility"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "workorderFacId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除工单对应的设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "removeByIdUsingDELETE",
      "tags": [
        "workorder-facility"
      ]
    }
  }
}