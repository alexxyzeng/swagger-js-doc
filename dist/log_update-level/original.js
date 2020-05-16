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
            "name": "level",
            "description": "level",
            "enum": []
          },
          {
            "type": "string",
            "name": "packageName",
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