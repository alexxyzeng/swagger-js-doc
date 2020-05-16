{
  "path": "/facility/download",
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
      "summary": "设备离线数据下载",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByLastUpdatedTimestampUsingGET_1",
      "tags": [
        "facility"
      ]
    }
  }
}