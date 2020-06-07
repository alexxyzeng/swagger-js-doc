{
  "path": "/system/setting",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "isCustomize",
            "description": "是否用户自定义 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          }
        ]
      },
      "summary": "获取系统配置",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_58",
      "tags": [
        "systemsetting"
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
}