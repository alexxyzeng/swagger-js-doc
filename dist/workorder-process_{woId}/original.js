{
  "path": "/workorder-process/{woId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "woId",
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
      "operationId": "searchUsingGET_10",
      "tags": [
        "workorder-process"
      ]
    }
  }
}