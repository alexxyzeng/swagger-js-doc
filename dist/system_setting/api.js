[
  "/system/setting",
  {
    "get": {
      "tags": [
        "systemsetting"
      ],
      "summary": "获取系统配置",
      "operationId": "findUsingGET_58",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "df-tenant-id",
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
          "name": "isCustomize",
          "in": "query",
          "description": "是否用户自定义 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of系统配置-响应"
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