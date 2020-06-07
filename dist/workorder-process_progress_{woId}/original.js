{
  "path": "/workorder-process/progress/{woId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "woId",
            "description": "woId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询工单处理进度条",
      "consumes": [
        "application/json"
      ],
      "operationId": "findProgressUsingGET",
      "tags": [
        "workorder-process"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of进度条信息"
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