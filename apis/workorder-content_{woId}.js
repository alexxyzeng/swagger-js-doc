{
  "path": "/workorder-content/{woId}",
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
      "summary": "查询工作内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_60",
      "tags": [
        "workorder-content"
      ]
    }
  }
}