{
  "path": "/employee/current/modules",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "当前用户所拥有的的模块权限：管理中心、资产管理、物业管理",
      "consumes": [
        "application/json"
      ],
      "operationId": "getCurrentModulesUsingGET",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOfEmployeeUseModulesDto"
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