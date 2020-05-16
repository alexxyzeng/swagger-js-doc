{
  "path": "/workorder/sla/{id}",
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
      "summary": "查询sla详情信息-byId",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET_2",
      "tags": [
        "workorder-sla"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "autoArchive": {
              "type": "string",
              "description": "是否自动存档 0-否 1-是 默认值为0 是否枚举{否=No-0, 是=Yes-1}",
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
            "priorityDtos": {
              "type": "array",
              "valueType": {
                "type": "object",
                "deliveryMethod": {
                  "type": "string",
                  "description": "1-是否自动派工 2-是否智能派工 3-是否手动派工 {自动派工=Auto-1, 智能派工=Intelligent-2, 手动派工=Manual-3}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                },
                "executorIds": {
                  "type": "array",
                  "valueType": {
                    "type": "number",
                    "description": "",
                    "required": false,
                    "enum": []
                  },
                  "required": false,
                  "description": "执行人id列表， 自动派工时该字段不能为空"
                },
                "isAllowScramble": {
                  "type": "string",
                  "description": "是否允许抢单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "notificationDtos": {
                  "type": "array",
                  "valueType": {
                    "type": {
                      "type": "string",
                      "description": "通知类型 {创建=Create-1, 排程派工=Dispatch-2, 审批申请=Approval-3, 审批通过=ApprovalSuccess-4, 审批不通过=ApprovalFail-5, 验证通过=CheckSuccess-6, 验证不通过=CheckFail-7, 抢单成功=ScrambleSuccess-8, 全部暂停=AllSuspend-9, 终止=Termination-11, 完成=Complete-12, 未响应升级=NoResponseUpgrade-13, 未接单升级=NoAcceptUpgrade-14, 未完成升级=NoCompleteUpgrade-15, 审批提醒=PmApproval-16, 重新派工=AgainDispatch-17}",
                      "enum": [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15",
                        "16",
                        "17"
                      ]
                    },
                    "fixNotifyRole": {
                      "type": "string",
                      "description": "",
                      "enum": []
                    },
                    "fixNotifyRoleSet": {
                      "type": "array",
                      "valueType": {
                        "type": "string",
                        "description": "",
                        "enum": [
                          "1",
                          "2",
                          "3",
                          "4",
                          "5"
                        ]
                      },
                      "required": false,
                      "description": "固定通知人 1-执行人 2-审批人 3-申请人 4-派工人 固定提醒时，固定通知人不能为空 {执行人=Executive-1, 审批人=Approver-2, 申请人=Applicant-3, 派工人=Send-4, 报修人=ReportFix-5}"
                    },
                    "id": {
                      "type": "number",
                      "description": "优先级通知Id，更新时需将原id传回",
                      "required": false,
                      "enum": []
                    },
                    "intervalTime": {
                      "type": "number",
                      "description": "间隔时间 事件升级时，间隔时间不能为空",
                      "required": false,
                      "enum": []
                    },
                    "name": {
                      "type": "string",
                      "description": "通知名称",
                      "enum": []
                    },
                    "noticeMethods": {
                      "type": "array",
                      "valueType": {
                        "type": "string",
                        "description": "",
                        "enum": [
                          "1",
                          "2",
                          "3",
                          "4",
                          "5"
                        ]
                      },
                      "required": false,
                      "description": "1-站内信 2-移动推送 3-短信 4-邮件 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}"
                    },
                    "notificationType": {
                      "type": "string",
                      "description": "通知分类: 1-事件升级 2-固定提醒 3-自定义提醒 {事件升级=Event-1, 固定通知=Fix-2, 自定义通知=Customize-3}",
                      "enum": [
                        "1",
                        "2",
                        "3"
                      ]
                    },
                    "notifyIds": {
                      "type": "array",
                      "valueType": {
                        "type": "number",
                        "description": "",
                        "required": false,
                        "enum": []
                      },
                      "required": false,
                      "description": "通知人id 事件升级及自定义提醒，此项不能为空"
                    },
                    "notifyType": {
                      "type": "string",
                      "description": "通知用户类型: 1-工作组 2-员工 事件升级及自定义提醒，此项不能为空 {工作组=Group-1, 员工=User-2}",
                      "enum": [
                        "1",
                        "2"
                      ]
                    },
                    "timeUnit": {
                      "type": "string",
                      "description": "间隔时间单位 1-分钟 2-小时 3-天 事件升级时，间隔时间单位不能为空 {分钟=Min-1, 小时=Hour-2, 天=Day-3}",
                      "enum": [
                        "1",
                        "2",
                        "3"
                      ]
                    }
                  },
                  "required": false,
                  "description": "事件升级&&消息提醒"
                },
                "scrambleTime": {
                  "type": "number",
                  "description": "允许抢单时间 允许抢单时该字段不能为空",
                  "required": false,
                  "enum": []
                },
                "timeUnit": {
                  "type": "string",
                  "description": "抢单时间单位 1-分钟 2-小时 3-天 允许抢单时该字段不能为空 {分钟=Min-1, 小时=Hour-2, 天=Day-3}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                },
                "woPriorityId": {
                  "type": "number",
                  "description": "优先级id",
                  "required": false,
                  "enum": []
                },
                "workTeamId": {
                  "type": "number",
                  "description": "工作组id",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "优先级处理事项"
            },
            "spBuildingId": {
              "type": "number",
              "description": "大楼ID",
              "required": false,
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层ID",
              "required": false,
              "enum": []
            },
            "spSpaceId": {
              "type": "number",
              "description": "房间ID",
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
              "description": "关联服务类型id 集团版必传",
              "required": false,
              "enum": []
            },
            "woType": {
              "type": "string",
              "description": "工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
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
      "summary": "更新sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_48",
      "tags": [
        "workorder-sla"
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
      "summary": "删除sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_45",
      "tags": [
        "workorder-sla"
      ]
    }
  }
}