{
  "path": "/employee/batch-activate",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "userIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "用户ID"
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量激活用户",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchActivateUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}