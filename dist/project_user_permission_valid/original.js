{
  "path": "/project/user/permission/valid",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "projectName",
            "description": "projectName",
            "enum": []
          }
        ]
      },
      "summary": "当前登录用户有效项目权限",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUserValidProjectPermissionUsingGET",
      "tags": [
        "base-project"
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