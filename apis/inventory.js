{
  "path": "/inventory",
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
            "type": "string",
            "description": "仓库名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "货架名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "物资编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "物资名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "物资品牌",
            "enum": []
          },
          {
            "type": "string",
            "description": "物资型号",
            "enum": []
          },
          {
            "type": "string",
            "description": "物资单位",
            "enum": []
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ]
      },
      "summary": "库存-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_40",
      "tags": [
        "inventory"
      ]
    }
  }
}