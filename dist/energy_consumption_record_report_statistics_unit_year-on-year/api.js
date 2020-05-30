[
  "/energy/consumption/record/report/statistics/unit/year-on-year",
  {
    "get": {
      "tags": [
        "energy-consumption-record-report"
      ],
      "summary": "能源报表-单位能耗同比",
      "operationId": "consumptionStatisticsUnitUsingGET",
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
          "name": "cycleStartDate",
          "in": "query",
          "description": "开始时间",
          "required": false,
          "type": "string"
        },
        {
          "name": "cycleEndDate",
          "in": "query",
          "description": "结束时间",
          "required": false,
          "type": "string"
        },
        {
          "name": "energyConsumptionType",
          "in": "query",
          "description": "能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}",
          "required": true,
          "type": "string"
        },
        {
          "name": "projectIds",
          "in": "query",
          "description": "物业点",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "tenantId",
          "in": "query",
          "description": "租户id，不需要传",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "isAll",
          "in": "query",
          "description": "是否全部:true 全部",
          "required": false,
          "type": "object"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf能耗统计-单位能耗-用量"
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