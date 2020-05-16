{
  "path": "/workorder/{id}/complete",
  "methods": {
    "put": {
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
      "summary": "完成",
      "consumes": [
        "application/json"
      ],
      "operationId": "completeUsingPUT_1",
      "tags": [
        "workorder"
      ]
    }
  }
}