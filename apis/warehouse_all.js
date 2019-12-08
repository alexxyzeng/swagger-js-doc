{
  "path": "/warehouse/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "仓库编码ID",
            "enum": []
          },
          {
            "type": "string",
            "description": "仓库名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "位置",
            "enum": []
          },
          {
            "type": "string",
            "description": "仓库管理员",
            "enum": []
          }
        ]
      },
      "summary": "库存仓库-所有",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllUsingGET_4",
      "tags": [
        "warehouse"
      ]
    }
  }
}