{
  "path": "/workorder-app/statistics",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
              ]
            },
            "required": false
          }
        ]
      },
      "summary": "工单待处理数量统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticsUsingGET",
      "tags": [
        "workorder-app"
      ]
    }
  }
}