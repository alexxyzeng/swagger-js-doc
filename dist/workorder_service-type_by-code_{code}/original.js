{
  "path": "/workorder/service-type/by-code/{code}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "code",
            "description": "code",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询服务类型-byCode",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByCodeUsingGET_2",
      "tags": [
        "workorder-service-type"
      ]
    }
  }
}