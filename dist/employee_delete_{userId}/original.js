{
  "path": "/employee/delete/{userId}",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
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
      "summary": "删除用户",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}