{
  "path": "/message/send/unread-count/statistics",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "统计各项目未读站内信数",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticsUsingGET",
      "tags": [
        "base-message"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of项目未读消息数统计-响应"
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