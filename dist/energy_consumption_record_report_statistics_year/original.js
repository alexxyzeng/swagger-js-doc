{
  "path": "/energy/consumption/record/report/statistics/year",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "year",
            "description": "统计年份",
            "required": true,
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
          {
            "type": "string",
            "name": "type",
            "description": "统计方式 {费用=EnergyStasticsTypeEnum-1, 用量=EnergyStasticsTypeEnum-2}",
            "enum": []
          },
          {}
        ]
      },
      "summary": "能源报表-年度统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "consumptionStatisticsUsingGET",
      "tags": [
        "energy-consumption-record-report"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of能耗统计-响应"
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