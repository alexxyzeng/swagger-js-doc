{
  "path": "/building/check-unique",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "displayName",
            "description": "名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "编码",
            "enum": []
          }
        ]
      },
      "summary": "检查大厦名称或编码是否重复",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkUniqueUsingGET",
      "tags": [
        "base-building-building"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofboolean"
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