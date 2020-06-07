{
  "path": "/workorder-process/app/{woId}",
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
      "summary": "查询工单记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchOfAppUsingGET",
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