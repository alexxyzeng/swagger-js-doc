{
  "path": "/demand/{id}/demand-type",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "demandTypeRefId": {
              "type": "number",
              "description": "需求类型改关联ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改需求-需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateDemandTypeUsingPUT",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}