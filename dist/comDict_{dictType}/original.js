{
  "path": "/comDict/{dictType}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "dictType",
            "description": "dictType",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "根据类型查询字典值列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByTypeUsingGET",
      "tags": [
        "base-dict"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf公共字典"
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