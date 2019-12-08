{
  "path": "/undertake/task/facility/{id}/content",
  "methods": {
    "get": {
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
      "summary": "承接查验-任务-对象(设备)-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findContentByIdUsingGET",
      "tags": [
        "undertake-task-facility"
      ]
    }
  }
}