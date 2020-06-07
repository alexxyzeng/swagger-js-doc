[
  "/undertake/app/checked/{objectId}/{objectType}",
  {
    "put": {
      "tags": [
        "undertake-app"
      ],
      "summary": "对象完成查验",
      "operationId": "checkedByObjectIdUsingPUT",
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
        },
        {
          "in": "body",
          "name": "dto",
          "description": "dto",
          "required": true,
          "schema": {
            "$ref": "#/definitions/承接查验-任务-对象-查验完成-请求"
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