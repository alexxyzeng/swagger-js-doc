{
  "path": "/message/send/{id}",
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
      "summary": "消息发送记录-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_34",
      "tags": [
        "base-message"
      ]
    },
    "put": {
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
      "summary": "修改消息发送记录-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_42",
      "tags": [
        "base-message"
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
      "summary": "删除消息发送记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_34",
      "tags": [
        "base-message"
      ]
    }
  }
}