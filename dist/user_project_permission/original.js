{
  "path": "/user/project/permission",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "获取当前登录用户项目权限",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUserProjectPermissionUsingGET",
      "tags": [
        "app-index",
        "base-user-login"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf项目信息"
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