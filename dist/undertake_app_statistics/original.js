{
  "path": "/undertake/app/statistics",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": [
                "1",
                "2"
              ]
            },
            "required": false,
            "description": "types",
            "name": "types"
          }
        ]
      },
      "summary": "承接查验待处理数量统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticsUsingGET_1",
      "tags": [
        "undertake-app"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf承接查验任务统计数据"
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