{
  "path": "/index/statistics/{startDate}",
  "methods": {
    "post": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "startDate",
            "description": "startDate",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "更新统计数据",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticsUsingPOST",
      "tags": [
        "index"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
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