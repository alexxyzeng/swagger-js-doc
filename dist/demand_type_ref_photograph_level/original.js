{
  "path": "/demand/type/ref/photograph/level",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "parentId",
            "description": "parentId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "需求类型-随手拍-层级查询",
      "consumes": [
        "application/json"
      ],
      "operationId": "findLevelOfPhotographUsingGET_2",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}