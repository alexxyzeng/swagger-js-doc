{
  "path": "/project/{id}/user-number",
  "methods": {
    "get": {
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
      "summary": "获取项目已用和剩余用户数",
      "consumes": [
        "application/json"
      ],
      "operationId": "userNumberUsingGET",
      "tags": [
        "base-project"
      ]
    }
  }
}