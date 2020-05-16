{
  "path": "/inspect-task/content/{id}/detail",
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
      "summary": "巡检任务-内容-其他详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findDetailByIdUsingGET",
      "tags": [
        "inspect-task"
      ]
    }
  }
}