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
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "用户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "巡检任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
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