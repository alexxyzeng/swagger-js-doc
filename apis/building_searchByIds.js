{
  "path": "/building/searchByIds",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          }
        ]
      },
      "summary": "查找房产列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdsUsingGET",
      "tags": [
        "base-building-building"
      ]
    }
  }
}