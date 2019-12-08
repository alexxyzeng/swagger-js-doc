{
  "path": "/outbound/material",
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
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "库存ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "出库物资-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_46",
      "tags": [
        "inventory"
      ]
    }
  }
}