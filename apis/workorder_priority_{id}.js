{
  "path": "/workorder/priority/{id}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "优先级删除",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteByIdUsingDELETE",
      "tags": [
        "workorder-priority"
      ]
    }
  }
}