{
  "path": "/employee/{userId}/phone-info",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "phone": {
              "type": "string",
              "description": "手机号",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "userId",
            "description": "userId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改用户手机号信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updatePhoneInfoUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}