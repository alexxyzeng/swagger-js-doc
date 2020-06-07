[
  "/warehouse/all",
  {
    "get": {
      "tags": [
        "warehouse"
      ],
      "summary": "库存仓库-所有",
      "operationId": "findAllUsingGET_4",
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
          "name": "code",
          "in": "query",
          "description": "仓库编码ID",
          "required": false,
          "type": "string"
        },
        {
          "name": "name",
          "in": "query",
          "description": "仓库名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "address",
          "in": "query",
          "description": "位置",
          "required": false,
          "type": "string"
        },
        {
          "name": "managements",
          "in": "query",
          "description": "仓库管理员",
          "required": false,
          "type": "string"
        },
        {
          "name": "managementId",
          "in": "query",
          "description": "仓库管理员ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOfWarehouse"
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