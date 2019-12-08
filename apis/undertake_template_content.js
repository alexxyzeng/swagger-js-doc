{
  "path": "/undertake/template/content",
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
          },
          {
            "type": "number",
            "description": "模版id",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "description": "查验内容id",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "承接查验模板-内容-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_54",
      "tags": [
        "undertake-template-content"
      ]
    }
  }
}