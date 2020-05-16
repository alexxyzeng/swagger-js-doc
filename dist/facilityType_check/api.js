[
  "/facilityType/check",
  {
    "get": {
      "tags": [
        "facility-type"
      ],
      "summary": "检验设备分类",
      "operationId": "checkTypeNameUsingGET_1",
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
          "description": "设备分类ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "parentId",
          "in": "query",
          "description": "上级设备分类id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "name",
          "in": "query",
          "description": "设备分类名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "code",
          "in": "query",
          "description": "设备分类编码",
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