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
            "name": "dictType",
            "description": "dictType",
            "enum": []
          },
          {
            "type": "string",
            "name": "dictText",
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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOfComDict"
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