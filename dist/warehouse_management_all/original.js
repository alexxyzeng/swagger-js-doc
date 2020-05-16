{
  "path": "/warehouse/management/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "warehouseId",
            "description": "仓库ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "仓库管理员-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllUsingGET_5",
      "tags": [
        "warehouse"
      ]
    }
  }
}