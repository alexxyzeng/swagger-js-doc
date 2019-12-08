{
  "path": "/position/{id}",
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
      "summary": "查找指定ID岗位",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_35",
      "tags": [
        "base-org-position"
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
      "summary": "删除岗位",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_42",
      "tags": [
        "base-org-position"
      ]
    }
  }
}