[
  "/energy/consumption/record/export",
  {
    "get": {
      "tags": [
        "energy-consumption-record"
      ],
      "summary": "能耗记录列表导出",
      "operationId": "exportUsingGET_1",
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
          "name": "energyConsumptionCycle",
          "in": "query",
          "description": "能耗周期",
          "required": false,
          "type": "string"
        },
        {
          "name": "energyConsumptionType",
          "in": "query",
          "description": "能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}",
          "required": false,
          "type": "string"
        },
        {
          "name": "currentCost",
          "in": "query",
          "description": "本期费用：分",
          "required": false,
          "type": "object"
        },
        {
          "name": "currentDosage",
          "in": "query",
          "description": "本期用量",
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