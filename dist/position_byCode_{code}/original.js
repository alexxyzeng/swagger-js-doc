{
  "path": "/position/byCode/{code}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "code",
            "description": "code",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查找指定编码岗位",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByCodeUsingGET_1",
      "tags": [
        "base-org-position"
      ]
    }
  }
}