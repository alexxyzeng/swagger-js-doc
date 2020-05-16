[
  "/log/update-level",
  {
    "get": {
      "tags": [
        "base-log"
      ],
      "summary": "日志级别修改",
      "operationId": "updateLevelUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "level",
          "in": "query",
          "description": "level",
          "required": true,
          "type": "string"
        },
        {
          "name": "packageName",
          "in": "query",
          "description": "packageName",
          "required": false,
          "type": "string",
          "default": "-1"
        }
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
]