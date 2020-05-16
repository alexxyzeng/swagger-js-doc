{
  "path": "/workorder-app/wait-process",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          }
        ]
      },
      "summary": "待处理列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "waitProcessUsingGET",
      "tags": [
        "workorder-app"
      ]
    }
  }
}