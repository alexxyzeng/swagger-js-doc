{
  "path": "/undertake/app/checked/{taskId}",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "taskId",
            "description": "taskId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "对象完成查验",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkedByTaskIdUsingPUT",
      "tags": [
        "undertake-app"
      ]
    }
  }
}