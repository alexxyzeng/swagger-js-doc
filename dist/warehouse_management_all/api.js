[
  "/warehouse/management/all",
  {
    "get": {
      "tags": [
        "warehouse"
      ],
      "summary": "仓库管理员-列表",
      "operationId": "findAllUsingGET_5",
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
          "name": "id",
          "in": "query",
          "description": "ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "projectId",
          "in": "query",
          "description": "项目ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "warehouseId",
          "in": "query",
          "description": "仓库ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf仓库管理员-响应"
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