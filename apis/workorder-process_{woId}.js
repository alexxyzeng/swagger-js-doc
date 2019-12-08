{
  "path": "/workorder-process/{woId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "woId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询工单历史记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_9",
      "tags": [
        "workorder-process"
      ]
    }
  }
}