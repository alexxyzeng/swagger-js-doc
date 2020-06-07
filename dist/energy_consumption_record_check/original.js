{
  "path": "/energy/consumption/record/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "id，更新的时候校验必须要传入当前的id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "energyConsumptionCycle",
            "description": "能耗周期",
            "enum": []
          },
          {
            "type": "number",
            "name": "energyConsumptionType",
            "description": "能耗类型",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "能耗记录表-校验",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkUsingGET",
      "tags": [
        "energy-consumption-record"
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