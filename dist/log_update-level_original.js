{
  "path": "/log/update-level",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "level",
            "enum": []
          },
          {
            "type": "string",
            "description": "packageName",
            "enum": []
          }
        ]
      },
      "summary": "日志级别修改",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateLevelUsingGET",
      "tags": [
        "base-log"
      ]
    }
  }
}