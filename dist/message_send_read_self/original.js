{
  "path": "/message/send/read/self",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "个人站内信全部已读",
      "consumes": [
        "application/json"
      ],
      "operationId": "readMessageUsingPUT",
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
        "201": {
          "description": "Created"
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