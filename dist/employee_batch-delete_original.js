{
  "path": "/employee/batch-delete",
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
      "summary": "批量删除用户",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchDeleteUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}