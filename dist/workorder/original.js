{
  "path": "/workorder",
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
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
            "name": "woTypes"
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "工单编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "username",
            "description": "报障人名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "phone",
            "description": "联系电话",
            "enum": []
          },
          {
            "type": "number",
            "name": "orgDepartmentId",
            "description": "部门id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "woServiceTypeId",
            "description": "服务类型id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "woServiceTypeName",
            "description": "服务类型名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "facilityTypeId",
            "description": "设备分类ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "facilityId",
            "description": "设备ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "hasCost",
            "description": "是否收费 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          },
          {
            "type": "number",
            "name": "woServiceTypeRefId",
            "description": "服务类型关联id",
            "required": false,
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
            "description": "优先级id",
            "name": "woPriorityIds"
          },
          {
            "type": "string",
            "name": "woPriorityName",
            "description": "优先级名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "spBuildingId",
            "description": "大楼ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "spFloorId",
            "description": "楼层ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "spSpaceId",
            "description": "空间ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "spBuildingName",
            "description": "大楼名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "spFloorName",
            "description": "楼层名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "spSpaceName",
            "description": "空间名称",
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
            "description": "工作组ID",
            "name": "workTeamIds"
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
            "description": "执行人ID",
            "name": "workerIds"
          },
          {
            "type": "string",
            "name": "description",
            "description": "问题描述",
            "enum": []
          },
          {
            "type": "number",
            "name": "deDemandId",
            "description": "关联的需求Id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "deDemandCode",
            "description": "关联的需求编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "createStartTime",
            "description": "创建开始日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "createEndTime",
            "description": "创建结束日期",
            "enum": []
          },
          {
            "type": "string",
            "name": "actualEndStartTime",
            "description": "完成日期开始",
            "enum": []
          },
          {
            "type": "string",
            "name": "actualEndEndTime",
            "description": "完成日期结束",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}",
            "name": "status"
          },
          {
            "type": "string",
            "name": "keyWord",
            "description": "关键字筛选",
            "enum": []
          }
        ]
      },
      "summary": "工单查询",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_7",
      "tags": [
        "workorder"
      ]
    },
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
      "operationId": "createUsingPOST_53",
      "tags": [
        "workorder"
      ]
    }
  }
}