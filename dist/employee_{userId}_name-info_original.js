{
  "path": "/employee/{userId}/name-info",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "name": {
              "type": "string",
              "description": "姓名",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "userId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改用户姓名信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateNameInfoUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}