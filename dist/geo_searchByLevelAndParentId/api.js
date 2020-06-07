[
  "/geo/searchByLevelAndParentId",
  {
    "get": {
      "tags": [
        "base-geo"
      ],
      "summary": "根据level parentId 得到行政区划列表",
      "operationId": "findByLevelAndParentIdUsingGET",
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
          "name": "parentId",
          "in": "query",
          "description": "父ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "Level",
          "in": "query",
          "description": "层级",
          "required": false,
          "type": "integer",
          "format": "int32"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf行政级别信息"
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