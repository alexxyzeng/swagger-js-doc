{
  "path": "/workorder-process/progress/{woId}",
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
      "summary": "查询工单处理进度条",
      "consumes": [
        "application/json"
      ],
      "operationId": "findProgressUsingGET",
      "tags": [
        "workorder-process"
      ]
    }
  }
}