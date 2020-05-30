{
  "path": "/energy/consumption/record/report/statistics/month/unit/chain",
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
      "summary": "能源报表-单位能耗环比",
      "consumes": [
        "application/json"
      ],
      "operationId": "consumptionStatisticsMonthUnitUsingGET",
      "tags": [
        "energy-consumption-record-report"
      ]
    }
  }
}