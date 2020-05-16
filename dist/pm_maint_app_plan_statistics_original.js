{
  "path": "/pm/maint/app/plan/statistics",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "日历开始时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "日历结束时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "状态统计开始时间, 没传则取日历开始时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "状态统计结束时间，没传则取日历结束时间",
            "enum": []
          }
        ]
      },
      "summary": "维保计划统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "planStatisticsUsingGET",
      "tags": [
        "pm-app"
      ]
    }
  }
}