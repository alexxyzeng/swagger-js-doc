{
  "path": "/undertake/app/wait-check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "isCompleted",
            "description": "isCompleted",
            "enum": [
              "0",
              "1"
            ]
          },
          {
            "type": "number",
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          }
        ]
      },
      "summary": "查验任务",
      "consumes": [
        "application/json"
      ],
      "operationId": "findWaitCheckUsingGET",
      "tags": [
        "undertake-app"
      ]
    }
  }
}