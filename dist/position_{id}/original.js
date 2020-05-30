{
  "path": "/position/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
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
      "operationId": "findByIdUsingGET_38",
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
            "name": "id",
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
      "operationId": "deleteUsingDELETE_40",
      "tags": [
        "base-org-position"
      ]
    }
  }
}