[
  "/employee/{userId}/base-info",
  {
    "put": {
      "tags": [
        "base-employee"
      ],
      "summary": "修改用户基本信息",
      "operationId": "updateBaseInfoUsingPUT",
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
          "name": "userId",
          "in": "path",
          "description": "userId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "in": "body",
          "name": "updateDto",
          "description": "updateDto",
          "required": true,
          "schema": {
            "$ref": "#/definitions/创建用户参数"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfEmployeeBaseInfoRspDto"
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