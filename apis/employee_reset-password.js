{
  "path": "/employee/reset-password",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "bindAccount": {
              "type": "string",
              "description": "账号",
              "enum": []
            },
            "newPassword": {
              "type": "string",
              "description": "新密码",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "重置用户密码",
      "consumes": [
        "application/json"
      ],
      "operationId": "resetPasswordUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}