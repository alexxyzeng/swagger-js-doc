{
  "path": "/workorder-app",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "description": {
              "type": "string",
              "description": "问题描述",
              "enum": []
            },
            "facilities": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "设备列表"
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
            "isRefFacility": {
              "type": "string",
              "description": "是否关联设备 0-不关联 1-关联 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "orgDepartmentId": {
              "type": "number",
              "description": "部门id",
              "required": false,
              "enum": []
            },
            "phone": {
              "type": "string",
              "description": "联系电话",
              "enum": []
            },
            "spaceDtos": {
              "type": "array",
              "valueType": {
                "type": "object",
                "description": {
                  "type": "string",
                  "description": "处理方式",
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
                "spBuildingId": {
                  "type": "number",
                  "description": "大楼id",
                  "required": false,
                  "enum": []
                },
                "spFloorId": {
                  "type": "number",
                  "description": "楼层id",
                  "required": false,
                  "enum": []
                },
                "spSpaceId": {
                  "type": "number",
                  "description": "房间id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "空间位置"
            },
            "userId": {
              "type": "number",
              "description": "用户/客户ID",
              "required": false,
              "enum": []
            },
            "userType": {
              "type": "string",
              "description": "用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}",
              "enum": [
                "1",
                "2",
                "9"
              ]
            },
            "username": {
              "type": "string",
              "description": "报障人名称",
              "enum": []
            },
            "woPriorityId": {
              "type": "number",
              "description": "优先级id",
              "required": false,
              "enum": []
            },
            "woServiceTypeId": {
              "type": "number",
              "description": "服务类型id",
              "required": false,
              "enum": []
            },
            "woServiceTypeRefId": {
              "type": "number",
              "description": "服务类型关联id, 集团版必传",
              "required": false,
              "enum": []
            },
            "woSlaId": {
              "type": "number",
              "description": "slaId",
              "required": false,
              "enum": []
            },
            "woType": {
              "type": "string",
              "description": "工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "创建工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_50",
      "tags": [
        "workorder-app"
      ]
    }
  }
}