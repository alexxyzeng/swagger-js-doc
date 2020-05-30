{
  "path": "/employee/edit/{userId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "userId",
            "description": "userId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "用户编辑详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findEditDetailUsingGET",
      "tags": [
        "base-employee"
      ]
    }
  }
}