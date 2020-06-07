{
  "path": "/workorder/service-type-ref/sla-status/search",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查询关联服务类型及是否配置sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "findSlaStatusUsingGET_1",
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