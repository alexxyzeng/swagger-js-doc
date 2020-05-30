{
  "path": "/energy/consumption/record/export",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "energyConsumptionCycle",
            "description": "能耗周期",
            "enum": []
          },
          {
            "type": "string",
            "name": "energyConsumptionType",
            "description": "能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}",
            "enum": []
          },
          {},
          {}
        ]
      },
      "summary": "能耗记录列表导出",
      "consumes": [
        "application/json"
      ],
      "operationId": "exportUsingGET_1",
      "tags": [
        "energy-consumption-record"
      ]
    }
  }
}