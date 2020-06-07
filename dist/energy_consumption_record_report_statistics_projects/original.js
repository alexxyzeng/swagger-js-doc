{
  "path": "/energy/consumption/record/report/statistics/projects",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "projectName",
            "description": "项目名称",
            "enum": []
          }
        ]
      },
      "summary": "能源报表-物业点查询",
      "consumes": [
        "application/json"
      ],
      "operationId": "findProjectsUsingGET",
      "tags": [
        "energy-consumption-record-report"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOfEcEnergyProjectRspDto"
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