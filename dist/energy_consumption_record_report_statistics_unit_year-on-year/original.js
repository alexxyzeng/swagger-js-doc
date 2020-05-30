{
  "path": "/energy/consumption/record/report/statistics/unit/year-on-year",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "cycleStartDate",
            "description": "开始时间",
            "enum": []
          },
          {
            "type": "string",
            "name": "cycleEndDate",
            "description": "结束时间",
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
      "summary": "能源报表-单位能耗同比",
      "consumes": [
        "application/json"
      ],
      "operationId": "consumptionStatisticsUnitUsingGET",
      "tags": [
        "energy-consumption-record-report"
      ]
    }
  }
}