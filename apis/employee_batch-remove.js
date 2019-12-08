{
  "path": "/employee/batch-remove",
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
              "required": false
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量移出用户",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchRemoveUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}