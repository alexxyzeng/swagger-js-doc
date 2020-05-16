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
            "name": "code",
            "description": "仓库编码ID",
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "仓库名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "address",
            "description": "位置",
            "enum": []
          },
          {
            "type": "string",
            "name": "managements",
            "description": "仓库管理员",
            "enum": []
          },
          {
            "type": "number",
            "name": "managementId",
            "description": "仓库管理员ID",
            "required": false,
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