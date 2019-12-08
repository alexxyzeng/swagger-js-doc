{
  "path": "/demand/type/ref/sync",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "typeRefs": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "同步需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "syncDemandTypeUsingPUT",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}