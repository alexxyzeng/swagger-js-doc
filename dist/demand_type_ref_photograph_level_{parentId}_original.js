{
  "path": "/demand/type/ref/photograph/level/{parentId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
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
      "operationId": "findLevelOfPhotographUsingGET_3",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}