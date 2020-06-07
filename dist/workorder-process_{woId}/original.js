{
  "path": "/workorder-process/{woId}",
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
      "summary": "查询工单历史记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_10",
      "tags": [
        "workorder-process"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单-处理记录表"
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