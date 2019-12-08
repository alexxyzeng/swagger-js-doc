{
  "path": "/demand/{id}/affirm",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "内容",
              "enum": []
            }
          }
        ],
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
      "summary": "需求验收",
      "consumes": [
        "application/json"
      ],
      "operationId": "affirmUsingPUT",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}