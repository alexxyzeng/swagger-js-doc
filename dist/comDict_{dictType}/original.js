{
  "path": "/comDict/{dictType}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "dictType",
            "description": "dictType",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "根据类型查询字典值列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByTypeUsingGET",
      "tags": [
        "base-dict"
      ]
    }
  }
}