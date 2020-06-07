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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf承接查验-任务-对象-查验内容-选项-响应"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
}