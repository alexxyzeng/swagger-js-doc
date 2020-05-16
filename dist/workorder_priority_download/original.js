{
  "path": "/workorder/priority/download",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "lastUpdatedTimestamp",
            "description": "lastUpdatedTimestamp",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "优先级离线数据下载",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByLastUpdatedTimestampUsingGET_2",
      "tags": [
        "workorder-priority"
      ]
    }
  }
}