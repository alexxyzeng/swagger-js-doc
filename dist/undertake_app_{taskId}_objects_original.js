{
  "path": "/undertake/app/{taskId}/objects",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "taskId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查验对象列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findObjectsByTaskIdUsingGET",
      "tags": [
        "undertake-app"
      ]
    }
  }
}