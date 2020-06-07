{
  "path": "/energy/consumption/record/report/statistics/type",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "能源报表-统计方式",
      "consumes": [
        "application/json"
      ],
      "operationId": "consumptionStatisticsTypeUsingGET",
      "tags": [
        "energy-consumption-record-report"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf统计方式"
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