{
  "path": "/workorder/service-type-ref/{id}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除关联服务类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_44",
      "tags": [
        "workorder-service-type-ref"
      ]
    }
  }
}