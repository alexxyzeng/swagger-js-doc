{
  "path": "/undertake/app/statistics",
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
                "2"
              ]
            },
            "required": false,
            "description": "types"
          }
        ]
      },
      "summary": "承接查验待处理数量统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticsUsingGET_1",
      "tags": [
        "undertake-app"
      ]
    }
  }
}