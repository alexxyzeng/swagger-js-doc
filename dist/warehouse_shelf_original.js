{
  "path": "/warehouse/shelf",
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
            "description": "仓库Id",
            "enum": []
          },
          {
            "type": "string",
            "description": "仓库code",
            "enum": []
          },
          {
            "type": "string",
            "description": "仓库名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "货架编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "货架名称",
            "enum": []
          }
        ]
      },
      "summary": "仓库货架-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_63",
      "tags": [
        "warehouse"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "name": {
              "type": "string",
              "description": "货架名称",
              "enum": []
            },
            "warehouseId": {
              "type": "number",
              "description": "仓库ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增仓库货架",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_48",
      "tags": [
        "warehouse"
      ]
    }
  }
}