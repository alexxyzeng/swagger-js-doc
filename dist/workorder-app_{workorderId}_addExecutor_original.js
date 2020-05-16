{
  "path": "/workorder-app/{workorderId}/addExecutor",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "employeeIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "执行人id列表"
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "增派",
      "consumes": [
        "application/json"
      ],
      "operationId": "addExecutorUsingPUT",
      "tags": [
        "workorder-app"
      ]
    }
  }
}