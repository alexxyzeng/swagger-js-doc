{
  "path": "/undertake/app/{objectId}/{objectType}/contents",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "objectId",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "description": "objectType",
            "enum": [
              "1",
              "2"
            ]
          }
        ],
        "query": []
      },
      "summary": "查验内容列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByObjectIdUsingGET",
      "tags": [
        "undertake-app"
      ]
    }
  }
}