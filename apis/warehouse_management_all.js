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
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
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