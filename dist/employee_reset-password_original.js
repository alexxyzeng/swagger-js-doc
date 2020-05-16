{
  "path": "/employee/reset-password",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "employeeId": {
              "type": "number",
              "description": "人员id",
              "required": false,
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