{
  "path": "/stat/home",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "location",
            "description": "查询类型 1-首页 2-工作台 {首页=Home-1, 工作台=Work-2}",
            "enum": []
          }
        ]
      },
      "summary": "工作台任务数",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_57",
      "tags": [
        "base-statistics"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of统计数据"
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