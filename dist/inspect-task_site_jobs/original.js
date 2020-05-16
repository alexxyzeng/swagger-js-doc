{
  "path": "/inspect-task/site/jobs",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
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
            "type": "string",
            "name": "qrcodeDynamicCode",
            "description": "点位码Code",
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-点位-扫码任务列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findJobsUsingGET",
      "tags": [
        "inspect-task"
      ]
    }
  }
}