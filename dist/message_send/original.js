{
  "path": "/message/send",
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
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "employeeId",
            "description": "员工id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "type",
            "description": "消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
            "enum": []
          },
          {
            "type": "string",
            "name": "isRead",
            "description": "是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          }
        ]
      },
      "summary": "消息发送记录-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_48",
      "tags": [
        "base-message"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
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
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增消息发送记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_34",
      "tags": [
        "base-message"
      ]
    },
    "delete": {
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
      "summary": "批量删除消息发送记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_39",
      "tags": [
        "base-message"
      ]
    }
  }
}