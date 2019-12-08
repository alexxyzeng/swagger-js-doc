{
  "path": "/inspect-task/job/{id}/set-operator",
  "methods": {
    "put": {
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
      "summary": "巡检任务-工作任务-操作人员",
      "consumes": [
        "application/json"
      ],
      "operationId": "setOperatorUsingPUT",
      "tags": [
        "inspect-task"
      ]
    }
  }
}