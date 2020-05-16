{
  "path": "/comDict",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "dictType",
            "enum": []
          },
          {
            "type": "string",
            "description": "dictText",
            "enum": []
          }
        ]
      },
      "summary": "公共字典查询",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET",
      "tags": [
        "base-dict"
      ]
    }
  }
}