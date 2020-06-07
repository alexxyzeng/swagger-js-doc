{
  "path": "/workorder/config/status",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查询工单状态字典项",
      "consumes": [
        "application/json"
      ],
      "operationId": "getStatusConfigUsingGET",
      "tags": [
        "workorder-config"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单状态字典项"
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