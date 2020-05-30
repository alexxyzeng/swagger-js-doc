{
  "path": "/workorder-content/{woId}",
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
      "summary": "查询工作内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_70",
      "tags": [
        "workorder-content"
      ]
    }
  }
}