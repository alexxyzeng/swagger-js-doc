{
  "path": "/message/send/read",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "ids": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "消息接受人表唯一ID"
            },
            "messageIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "消息id"
            },
            "projectId": {
              "type": "number",
              "description": "项目Id",
              "required": false,
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "消息已读",
      "consumes": [
        "application/json"
      ],
      "operationId": "readMessageUsingPUT_1",
      "tags": [
        "base-message"
      ]
    }
  }
}