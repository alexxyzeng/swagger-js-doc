{
  "path": "/index/statistics",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "首页统计接口",
      "consumes": [
        "application/json"
      ],
      "operationId": "indexStatisticsUsingGET",
      "tags": [
        "index"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of项目主页-统计-响应数据"
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