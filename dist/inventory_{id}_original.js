{
  "path": "/inventory/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "库存-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_30",
      "tags": [
        "inventory"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除库存",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_28",
      "tags": [
        "inventory"
      ]
    }
  }
}