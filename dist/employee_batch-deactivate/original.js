{
  "path": "/employee/batch-deactivate",
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
      "summary": "批量失效用户",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchDeactivateUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}