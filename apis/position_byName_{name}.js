{
  "path": "/position/byName/{name}",
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
      "summary": "查找指定名称岗位",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByNameUsingGET_1",
      "tags": [
        "base-org-position"
      ]
    }
  }
}