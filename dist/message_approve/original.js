{
  "path": "/message/approve",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "annex": {
              "type": "string",
              "description": "附件",
              "enum": []
            },
            "bizId": {
              "type": "number",
              "description": "业务ID",
              "required": false,
              "enum": []
            },
            "bizTable": {
              "type": "string",
              "description": "业务相关表名",
              "enum": []
            },
            "content": {
              "type": "string",
              "description": "消息内容",
              "enum": []
            },
            "createTime": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "creator": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "delete": {
              "type": "boolean",
              "description": "",
              "enum": []
            },
            "deleteTime": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "deleted": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "messageSends": {
              "type": "array",
              "valueType": {
                "type": "object",
                "id": {
                  "type": "number",
                  "description": "由程序分配的唯一ID",
                  "required": false,
                  "enum": []
                },
                "isRead": {
                  "type": "string",
                  "description": "是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "messageId": {
                  "type": "number",
                  "description": "消息id",
                  "required": false,
                  "enum": []
                },
                "projectId": {
                  "type": "number",
                  "description": "项目ID",
                  "required": false,
                  "enum": []
                },
                "receiver": {
                  "type": "number",
                  "description": "接收人ID",
                  "required": false,
                  "enum": []
                },
                "sendRetry": {
                  "type": "number",
                  "description": "发送次数",
                  "required": false,
                  "enum": []
                },
                "sendStatus": {
                  "type": "string",
                  "description": "发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "sendTime": {
                  "type": "string",
                  "description": "发送时间",
                  "enum": []
                },
                "sender": {
                  "type": "number",
                  "description": "发送人ID",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "备注"
            },
            "modifier": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "modifyTime": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "params": {},
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "source": {
              "type": "string",
              "description": "消息来源：1-需求 2-工单 3-预防性维护 4-巡检 5-库存 6-cmb员工服务平台 7-审批流 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
              ]
            },
            "templateCode": {
              "type": "string",
              "description": "模版编码 {WORKORDER_SCHEDULE_WORKER=0, WORKORDER_CREATE=1, WORKORDER_APPROVAL_APPLY=2, WORKORDER_APPROVAL_PASS=3, WORKORDER_APPROVAL_DENY=4, WORKORDER_VERIFY_PASS=5, WORKORDER_VERIFY_DENY=6, WORKORDER_SECKILL_SUCCESS=7, WORKORDER_STOP_ALL=8, WORKORDER_AGAIN_SCHEDULE_WORKER=9, WORKORDER_TERMINAL=10, WORKORDER_FINISH=11, WORKORDER_EVENT_UPGRADE=12, PM_APPROVAL_APPLY=13, PM_JOB_REMIND=14, PM_INCOMPLETE=15, PM_UNRESPONSIVE=16, INSPECT_START=17, INSPECT_INCOMPLETE=18, INSPECT_EXCEPTION=19, DEMAND_CREATE=20, DEMAND_PENDING_CHECK=21, DEMAND_PENDING_DISPOSE=22, DEMAND_CONFIRM_FAIL=23, DEMAND_ADDITIONAL_CHECK=24, DEMAND_ADDITIONAL_PASS=25, DEMAND_ADDITIONAL_FAIL=26, DEMAND_COMMENT=27, DEMAND_CMB_CREATE=28, DEMAND_CMB_CHECK_PASS=29, DEMAND_CMB_CHECK_FAIL=30, DEMAND_CMB_CREATE_WORKORDER=31, DEMAND_CMB_WORKORDER_RECEIVE=32, DEMAND_CMB_TRACK=33, DEMAND_CMB_COMPLETE=34, DEMAND_CMB_AUTO_AFFIRM=35, DEMAND_CMB_ADDITIONAL_PASS=36, DEMAND_CMB_OBSOLETE=37, APPROVE_CREATE=38, APPROVE_PENDING_APPROVAL=39, APPROVE_MISS_APPROVER=40, APPROVE_DELAY_APPROVAL=41, APPROVE_GOBACK_APPROVAL=42, APPROVE_FINISH_APPROVAL=43, APPROVE_CC_APPROVAL=44, APPROVE_PENDING_APPROVAL_EMAIL=45, APPROVE_CREATE_EMAIL=46, APPROVE_DELAY_APPROVAL_EMAIL=47, APPROVE_GOBACK_APPROVAL_EMAIL=48, APPROVE_FINISH_APPROVAL_EMAIL=49, APPROVE_CC_APPROVAL_EMAIL=50}",
              "enum": [
                "WORKORDER_SCHEDULE_WORKER",
                "WORKORDER_CREATE",
                "WORKORDER_APPROVAL_APPLY",
                "WORKORDER_APPROVAL_PASS",
                "WORKORDER_APPROVAL_DENY",
                "WORKORDER_VERIFY_PASS",
                "WORKORDER_VERIFY_DENY",
                "WORKORDER_SECKILL_SUCCESS",
                "WORKORDER_STOP_ALL",
                "WORKORDER_AGAIN_SCHEDULE_WORKER",
                "WORKORDER_TERMINAL",
                "WORKORDER_FINISH",
                "WORKORDER_EVENT_UPGRADE",
                "PM_APPROVAL_APPLY",
                "PM_JOB_REMIND",
                "PM_INCOMPLETE",
                "PM_UNRESPONSIVE",
                "INSPECT_START",
                "INSPECT_INCOMPLETE",
                "INSPECT_EXCEPTION",
                "DEMAND_CREATE",
                "DEMAND_PENDING_CHECK",
                "DEMAND_PENDING_DISPOSE",
                "DEMAND_CONFIRM_FAIL",
                "DEMAND_ADDITIONAL_CHECK",
                "DEMAND_ADDITIONAL_PASS",
                "DEMAND_ADDITIONAL_FAIL",
                "DEMAND_COMMENT",
                "DEMAND_CMB_CREATE",
                "DEMAND_CMB_CHECK_PASS",
                "DEMAND_CMB_CHECK_FAIL",
                "DEMAND_CMB_CREATE_WORKORDER",
                "DEMAND_CMB_WORKORDER_RECEIVE",
                "DEMAND_CMB_TRACK",
                "DEMAND_CMB_COMPLETE",
                "DEMAND_CMB_AUTO_AFFIRM",
                "DEMAND_CMB_ADDITIONAL_PASS",
                "DEMAND_CMB_OBSOLETE",
                "APPROVE_CREATE",
                "APPROVE_PENDING_APPROVAL",
                "APPROVE_MISS_APPROVER",
                "APPROVE_DELAY_APPROVAL",
                "APPROVE_GOBACK_APPROVAL",
                "APPROVE_FINISH_APPROVAL",
                "APPROVE_CC_APPROVAL",
                "APPROVE_PENDING_APPROVAL_EMAIL",
                "APPROVE_CREATE_EMAIL",
                "APPROVE_DELAY_APPROVAL_EMAIL",
                "APPROVE_GOBACK_APPROVAL_EMAIL",
                "APPROVE_FINISH_APPROVAL_EMAIL",
                "APPROVE_CC_APPROVAL_EMAIL"
              ]
            },
            "tenantId": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "title": {
              "type": "string",
              "description": "消息标题",
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            },
            "version": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增审批流消息",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_33",
      "tags": [
        "base-message"
      ]
    }
  }
}