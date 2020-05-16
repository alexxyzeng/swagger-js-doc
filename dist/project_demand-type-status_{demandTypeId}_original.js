{
  "path": "/project/demand-type-status/{demandTypeId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "demandTypeId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询项目同步的需求类型的状态",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchDemandTypeStatusUsingGET",
      "tags": [
        "base-project"
      ]
    }
  }
}