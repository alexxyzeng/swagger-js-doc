[
  "/pm/plan/calendar",
  {
    "get": {
      "tags": [
        "pm-plan"
      ],
      "summary": "维保计划-日历",
      "operationId": "findCalendarUsingGET",
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
          "name": "keyWord",
          "in": "query",
          "description": "关键词查询",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityTypeId",
          "in": "query",
          "description": "设备分类",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spaceId",
          "in": "query",
          "description": "大楼|楼层|房间 Id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "status",
          "in": "query",
          "description": "计划状态 {未开始=NotBegin-1, 处理中=InProgress-2, 已完成=JobDone-3, 已过期=Expired-4, 已逾期=Overdue-5}",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf维保日历数据"
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