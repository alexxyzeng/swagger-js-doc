{
  "path": "/stat/home",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "查询类型 1-首页 2-工作台 {首页=Home-1, 工作台=Work-2}",
            "enum": []
          }
        ]
      },
      "summary": "工作台任务数",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_54",
      "tags": [
        "base-statistics"
      ]
    }
  }
}