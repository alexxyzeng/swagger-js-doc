{
  "path": "/workorder-process/app/{woId}",
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
      "summary": "查询工单记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchOfAppUsingGET",
      "tags": [
        "workorder-process"
      ]
    }
  }
}