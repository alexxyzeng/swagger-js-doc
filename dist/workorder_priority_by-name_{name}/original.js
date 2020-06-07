{
  "path": "/workorder/priority/by-name/{name}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "name",
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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-优先级表-响应"
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