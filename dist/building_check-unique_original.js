{
  "path": "/building/check-unique",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "编码",
            "enum": []
          }
        ]
      },
      "summary": "检查大厦名称或编码是否重复",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkUniqueUsingGET",
      "tags": [
        "base-building-building"
      ]
    }
  }
}