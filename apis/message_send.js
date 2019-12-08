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
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "number",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "员工id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=1, 移动推送=2, 短信=3, 邮件=4, 公告=5}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "是否已读 0-未读 1-已读 是否枚举{否=0, 是=1}",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "消息发送记录-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_44",
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
              "description": "是否已读 0-未读 1-已读 是否枚举{否=No, 是=Yes}",
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
              "description": "发送状态：0-未发送 1-已发送 {未发送=Unsent, 已发送=Sent}",
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
      "operationId": "createUsingPOST_30",
      "tags": [
        "base-message"
      ]
    },
    "delete": {
      "parameters": {
        "body": [
          {
            "description": "idx",
            "enum": []
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除消息发送记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_40",
      "tags": [
        "base-message"
      ]
    }
  }
}