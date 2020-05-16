{
  "path": "/workorder/service-type/sla-status/search",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查询服务类型及是否配置sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "findSlaStatusUsingGET",
      "tags": [
        "workorder-service-type"
      ]
    }
  }
}