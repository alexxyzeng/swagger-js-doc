{
  "path": "/inbound/material",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
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
          },
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "inventoryId",
            "description": "库存ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "inventoryType",
            "description": "查询类型 {全部=All-1, 当前=Present-2}",
            "enum": []
          }
        ]
      },
      "summary": "入库物资-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_23",
      "tags": [
        "inventory"
      ]
    }
  }
}