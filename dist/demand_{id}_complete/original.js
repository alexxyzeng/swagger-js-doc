{
  "path": "/demand/{id}/complete",
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
      "summary": "需求完成",
      "consumes": [
        "application/json"
      ],
      "operationId": "completeUsingPUT",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}