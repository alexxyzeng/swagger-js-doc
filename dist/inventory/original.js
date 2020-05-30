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
            "type": "string",
            "name": "warehouseName",
            "description": "仓库名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "warehouseId",
            "description": "仓库ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "shelfName",
            "description": "货架名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "materialCode",
            "description": "物资编码",
            "enum": []
          },
          {
            "type": "string",
            "name": "materialName",
            "description": "物资名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "materialBrand",
            "description": "物资品牌",
            "enum": []
          },
          {
            "type": "string",
            "name": "materialModel",
            "description": "物资型号",
            "enum": []
          },
          {
            "type": "string",
            "name": "materialUnit",
            "description": "物资单位",
            "enum": []
          },
          {},
          {},
          {},
          {},
          {},
          {
            "type": "string",
            "name": "storageType",
            "description": "库存量 1-充足 2-紧缺 {充足=Enough-1, 紧缺=Lack-2}",
            "enum": []
          },
          {
            "type": "string",
            "name": "hybrid",
            "description": "物资编码或名称",
            "enum": []
          }
        ]
      },
      "summary": "库存-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_44",
      "tags": [
        "inventory"
      ]
    }
  }
}