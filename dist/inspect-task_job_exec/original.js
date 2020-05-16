{
  "path": "/inspect-task/job/exec",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "userId",
            "description": "用户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskId",
            "description": "巡检任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "status",
            "description": "工作任务状态 {未完成=Unfinished-1, 已完成=Complete-2}",
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-工作任务-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "execUsingGET",
      "tags": [
        "inspect-task"
      ]
    }
  }
}