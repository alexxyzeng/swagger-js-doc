{
  "path": "/department/{id}",
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
      "summary": "查找指定ID部门",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_9",
      "tags": [
        "base-org-department"
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
      "summary": "删除部门",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_10",
      "tags": [
        "base-org-department"
      ]
    }
  }
}