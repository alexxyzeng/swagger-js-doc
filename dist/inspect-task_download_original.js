{
  "path": "/inspect-task/download",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "lastUpdatedTimestamp",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "离线下载巡检任务",
      "consumes": [
        "application/json"
      ],
      "operationId": "downloadInspectDataUsingGET",
      "tags": [
        "inspect-task"
      ]
    }
  }
}