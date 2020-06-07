{
  "path": "/energy/consumption/record/report/statistics/month/unit/chain/export",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "cycleDate",
            "description": "统计周期",
            "enum": []
          },
          {
            "type": "string",
            "name": "energyConsumptionType",
            "description": "能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "物业点",
            "name": "projectIds"
          },
          {
            "type": "number",
            "name": "tenantId",
            "description": "租户id，不需要传",
            "required": false,
            "enum": []
          },
          {}
        ]
      },
      "summary": "能源报表-单位能耗环比导出",
      "consumes": [
        "application/json"
      ],
      "operationId": "consumptionStatisticsMonthUnitExportUsingGET",
      "tags": [
        "energy-consumption-record-report"
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
}