{
  "path": "/inspect-plan/copy/{id}",
  "methods": {
    "post": {
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
      "summary": "复制巡检计划",
      "consumes": [
        "application/json"
      ],
      "operationId": "copyUsingPOST",
      "tags": [
        "inspect-plan"
      ]
    }
  }
}