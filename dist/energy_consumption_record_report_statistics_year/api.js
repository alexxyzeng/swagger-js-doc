[
  "/energy/consumption/record/report/statistics/year",
  {
    "get": {
      "tags": [
        "energy-consumption-record-report"
      ],
      "summary": "能源报表-年度统计",
      "operationId": "consumptionStatisticsUsingGET",
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
          "name": "year",
          "in": "query",
          "description": "统计年份",
          "required": true,
          "type": "integer",
          "format": "int32"
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
          "name": "type",
          "in": "query",
          "description": "统计方式 {费用=EnergyStasticsTypeEnum-1, 用量=EnergyStasticsTypeEnum-2}",
          "required": true,
          "type": "string"
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
]