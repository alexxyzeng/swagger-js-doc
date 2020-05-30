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
      ]
    }
  }
}