{
  "path": "/workorder/service-type-ref/search",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查询关联服务类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllUsingGET_3",
      "tags": [
        "workorder-service-type-ref"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单-服务类型-关联表"
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