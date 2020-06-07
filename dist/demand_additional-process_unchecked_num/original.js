{
  "path": "/demand/additional-process/unchecked/num",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "需求追加处理记录-统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticUsingGET",
      "tags": [
        "service-center-demand-process"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of统计数量结构"
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