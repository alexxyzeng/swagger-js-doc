{
  "path": "/comDict/findUnit",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "unitName",
            "description": "unitName",
            "enum": []
          }
        ]
      },
      "summary": "公共字典查询",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUnitUsingGET",
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