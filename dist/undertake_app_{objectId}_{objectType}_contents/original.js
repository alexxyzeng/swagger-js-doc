{
  "path": "/undertake/app/{objectId}/{objectType}/contents",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "objectId",
            "description": "objectId",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "name": "objectType",
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