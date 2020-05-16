[
  "/space/check-unique",
  {
    "get": {
      "tags": [
        "base-building-space"
      ],
      "summary": "检查空间名称或编码是否重复",
      "operationId": "checkUniqueUsingGET_2",
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
          "name": "spFloorId",
          "in": "query",
          "description": "楼层ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "displayName",
          "in": "query",
          "description": "名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "code",
          "in": "query",
          "description": "编码",
          "required": false,
          "type": "string"
        }
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
]