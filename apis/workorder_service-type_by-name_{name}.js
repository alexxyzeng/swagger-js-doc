{
  "path": "/workorder/service-type/by-name/{name}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "description": "name",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询服务类型-byName",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByNameUsingGET_3",
      "tags": [
        "workorder-service-type"
      ]
    }
  }
}