{
  "path": "/employee/batch-grant-project",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "projectIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "项目ID"
            },
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
      "summary": "批量授权用户",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchGrantProjectUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}