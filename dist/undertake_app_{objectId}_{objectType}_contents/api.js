[
  "/undertake/app/{objectId}/{objectType}/contents",
  {
    "get": {
      "tags": [
        "undertake-app"
      ],
      "summary": "查验内容列表",
      "operationId": "findByObjectIdUsingGET",
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
          "name": "objectId",
          "in": "path",
          "description": "objectId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "objectType",
          "in": "path",
          "description": "objectType",
          "required": true,
          "type": "string",
          "enum": [
            "1",
            "2"
          ]
        }
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
]