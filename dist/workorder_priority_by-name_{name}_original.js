{
  "path": "/workorder/priority/by-name/{name}",
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
      "summary": "查询优先级-byName",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByNameUsingGET",
      "tags": [
        "workorder-priority"
      ]
    }
  }
}