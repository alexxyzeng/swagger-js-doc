{
  "path": "/enterprisemenu/findAllMenus",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "显示所有菜单",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllMenusUsingGET",
      "tags": [
        "base-menu"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOfMapOflongAndstring"
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