[
  "/energy/consumption/record/check",
  {
    "get": {
      "tags": [
        "energy-consumption-record"
      ],
      "summary": "能耗记录表-校验",
      "operationId": "checkUsingGET",
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
          "name": "id",
          "in": "query",
          "description": "id，更新的时候校验必须要传入当前的id",
          "required": false,
          "type": "integer",
          "format": "int64"
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
          "description": "能耗类型",
          "required": false,
          "type": "integer",
          "format": "int32"
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