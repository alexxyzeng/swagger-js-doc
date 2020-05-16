{
  "path": "/department/byCode/{code}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "description": "code",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查找指定编码的部门",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByCodeUsingGET",
      "tags": [
        "base-org-department"
      ]
    }
  }
}