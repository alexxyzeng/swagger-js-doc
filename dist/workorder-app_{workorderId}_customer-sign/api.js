[
  "/workorder-app/{workorderId}/customer-sign",
  {
    "put": {
      "tags": [
        "workorder-app"
      ],
      "summary": "客户签字",
      "operationId": "customerSignUsingPUT",
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
          "name": "workorderId",
          "in": "path",
          "description": "workorderId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "in": "body",
          "name": "customerSign",
          "description": "customerSign",
          "required": true,
          "schema": {
            "$ref": "#/definitions/需求文件"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "201": {
          "description": "Created"
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