[
  "/project/tree/simple",
  {
    "get": {
      "tags": [
        "base-project"
      ],
      "summary": "查询项目信息, 返回树",
      "operationId": "findTreeUsingGET",
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
          "name": "projectName",
          "in": "query",
          "description": "项目名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "excludeProjectId",
          "in": "query",
          "description": "不返回的项目id",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfCollectionOf项目信息-Simple"
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