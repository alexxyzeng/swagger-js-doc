{
  "path": "/department/byName/{name}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "description": "name",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查找指定名称的部门",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByNameUsingGET",
      "tags": [
        "base-org-department"
      ]
    }
  }
}