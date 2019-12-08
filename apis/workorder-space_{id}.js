{
  "path": "/workorder-space/{id}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
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
      "summary": "修改工单对应的空间位置",
      "consumes": [
        "application/json"
      ],
      "operationId": "removeByIdUsingDELETE_1",
      "tags": [
        "workorder-space"
      ]
    }
  }
}