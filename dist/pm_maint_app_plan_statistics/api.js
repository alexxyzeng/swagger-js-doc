[
  "/pm/maint/app/plan/statistics",
  {
    "get": {
      "tags": [
        "pm-app"
      ],
      "summary": "维保计划统计",
      "operationId": "planStatisticsUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "beginDate",
          "in": "query",
          "description": "日历开始时间",
          "required": true,
          "type": "string",
          "format": "date"
        },
        {
          "name": "endDate",
          "in": "query",
          "description": "日历结束时间",
          "required": true,
          "type": "string",
          "format": "date"
        },
        {
          "name": "statisticsBeginDate",
          "in": "query",
          "description": "状态统计开始时间, 没传则取日历开始时间",
          "required": false,
          "type": "string",
          "format": "date"
        },
        {
          "name": "statisticsEndDate",
          "in": "query",
          "description": "状态统计结束时间，没传则取日历结束时间",
          "required": false,
          "type": "string",
          "format": "date"
        }
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
]