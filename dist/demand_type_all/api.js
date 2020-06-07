[
  "/demand/type/all",
  {
    "get": {
      "tags": [
        "service-center-demand-type"
      ],
      "summary": "需求类型-全部",
      "operationId": "findUsingGET_10",
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
          "name": "tenantId",
          "in": "query",
          "description": "租户ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "typeName",
          "in": "query",
          "description": "类型名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "eqTypeName",
          "in": "query",
          "description": "类型名称-eq",
          "required": false,
          "type": "string"
        },
        {
          "name": "pathName",
          "in": "query",
          "description": "全称",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf需求类型-响应"
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