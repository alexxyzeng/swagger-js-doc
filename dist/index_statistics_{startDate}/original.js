{
  "path": "/index/statistics/{startDate}",
  "methods": {
    "post": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "startDate",
            "description": "startDate",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "更新统计数据",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticsUsingPOST",
      "tags": [
        "index"
      ]
    }
  }
}