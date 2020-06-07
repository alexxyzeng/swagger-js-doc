[
  "/energy/consumption/record/report/statistics/month/unit/chain/export",
  {
    "get": {
      "tags": [
        "energy-consumption-record-report"
      ],
      "summary": "能源报表-单位能耗环比导出",
      "operationId": "consumptionStatisticsMonthUnitExportUsingGET",
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
          "name": "cycleDate",
          "in": "query",
          "description": "统计周期",
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
            "$ref": "#/definitions/统一响应体Ofnull"
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