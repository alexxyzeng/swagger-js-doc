{
  "path": "/workorder-content/{woId}",
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
      "summary": "查询工作内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_70",
      "tags": [
        "workorder-content"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单-工作内容表"
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