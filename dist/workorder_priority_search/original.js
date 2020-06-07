{
  "path": "/workorder/priority/search",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查询优先级列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllUsingGET_2",
      "tags": [
        "workorder-priority"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单-优先级表-响应"
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