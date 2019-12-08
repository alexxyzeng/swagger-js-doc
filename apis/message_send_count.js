{
  "path": "/message/send/count",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
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
      "summary": "消息数",
      "consumes": [
        "application/json"
      ],
      "operationId": "countUsingGET",
      "tags": [
        "base-message"
      ]
    }
  }
}