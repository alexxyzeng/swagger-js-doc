{
  "path": "/workorder/service-type-ref/sync",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "typeIds": {
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
      "summary": "同步服务类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "syncServiceTypeUsingPUT",
      "tags": [
        "workorder-service-type-ref"
      ]
    }
  }
}