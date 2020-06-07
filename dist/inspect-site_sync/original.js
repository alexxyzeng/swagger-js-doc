{
  "path": "/inspect-site/sync",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "fz巡检点位同步",
      "consumes": [
        "application/json"
      ],
      "operationId": "syncUsingGET",
      "tags": [
        "inspect-site"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
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