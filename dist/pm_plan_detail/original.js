{
  "path": "/pm/plan/detail",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "maintId",
            "description": "设置id",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "name": "planDate",
            "description": "计划日期",
            "enum": []
          }
        ]
      },
      "summary": "查询计划详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET",
      "tags": [
        "pm-plan"
      ]
    }
  }
}