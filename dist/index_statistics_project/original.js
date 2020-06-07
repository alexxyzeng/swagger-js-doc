{
  "path": "/index/statistics/project",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "项目-首页统计接口",
      "consumes": [
        "application/json"
      ],
      "operationId": "indexStatisticsOfProjectUsingGET",
      "tags": [
        "index"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of项目的首页-统计-响应数据"
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