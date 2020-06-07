[
  "/demand/type/check",
  {
    "get": {
      "tags": [
        "service-center-demand-type"
      ],
      "summary": "检验需求类型",
      "operationId": "checkTypeNameUsingGET",
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
          "name": "typeId",
          "in": "query",
          "description": "需求类型ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "parentId",
          "in": "query",
          "description": "上级需求类型id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "typeName",
          "in": "query",
          "description": "需求名称",
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