{
  "path": "/log/update-level",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "level",
            "description": "level",
            "enum": []
          },
          {
            "type": "string",
            "name": "packageName",
            "description": "packageName",
            "enum": []
          }
        ]
      },
      "summary": "日志级别修改",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateLevelUsingGET",
      "tags": [
        "base-log"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofstring"
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