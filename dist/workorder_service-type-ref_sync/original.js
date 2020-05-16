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
              "required": false,
              "description": "同步的服务类型id，为空则全部删除"
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