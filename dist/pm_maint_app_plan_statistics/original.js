{
  "path": "/pm/maint/app/plan/statistics",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "beginDate",
            "description": "日历开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "endDate",
            "description": "日历结束时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "statisticsBeginDate",
            "description": "状态统计开始时间, 没传则取日历开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "statisticsEndDate",
            "description": "状态统计结束时间，没传则取日历结束时间",
            "enum": []
          }
        ]
      },
      "summary": "维保计划统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "planStatisticsUsingGET",
      "tags": [
        "pm-app"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of维保计划统计-响应"
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