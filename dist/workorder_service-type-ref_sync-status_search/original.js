{
  "path": "/workorder/service-type-ref/sync-status/search",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查询服务类型同步状态",
      "consumes": [
        "application/json"
      ],
      "operationId": "findSyncStatusUsingGET",
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