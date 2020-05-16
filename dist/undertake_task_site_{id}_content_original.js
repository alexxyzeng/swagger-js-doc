{
  "path": "/undertake/task/site/{id}/content",
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
      "summary": "承接查验-任务-对象(位置)-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findContentByIdUsingGET_1",
      "tags": [
        "undertake-task-site"
      ]
    }
  }
}