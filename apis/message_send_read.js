{
  "path": "/message/send/read",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "employeeId": {
              "type": "number",
              "description": "员工id",
              "required": false,
              "enum": []
            },
            "messageId": {
              "type": "number",
              "description": "消息id",
              "required": false,
              "enum": []
            },
            "messageIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
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
      "operationId": "readMessageUsingPUT",
      "tags": [
        "base-message"
      ]
    }
  }
}