{
  "path": "/workorder/pm/statistics",
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
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
              ]
            },
            "required": false,
            "description": "types",
            "name": "types"
          }
        ]
      },
      "summary": "PM工单待处理数量统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "woStatisticsUsingGET",
      "tags": [
        "workorder-pm"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单统计数据"
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