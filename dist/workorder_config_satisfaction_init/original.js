{
  "path": "/workorder/config/satisfaction/init",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "初始化",
      "consumes": [
        "application/json"
      ],
      "operationId": "initUsingPUT",
      "tags": [
        "workorder-config"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-满意度设置-响应"
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