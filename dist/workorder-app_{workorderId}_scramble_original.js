{
  "path": "/workorder-app/{workorderId}/scramble",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "抢单",
      "consumes": [
        "application/json"
      ],
      "operationId": "scrambleUsingPUT",
      "tags": [
        "workorder-app"
      ]
    }
  }
}