{
  "path": "/undertake/app/wait-check/statistics",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查验任务-数量统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticsByWaitCheckUsingGET",
      "tags": [
        "undertake-app"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of承接查验任务-待查验-统计数据"
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