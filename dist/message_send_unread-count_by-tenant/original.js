{
  "path": "/message/send/unread-count/by-tenant",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "未读站内信数-租户",
      "consumes": [
        "application/json"
      ],
      "operationId": "unreadCountByTenantIdUsingGET",
      "tags": [
        "base-message"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofint"
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