{
  "path": "/demand/{id}/obsolete",
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
      "summary": "需求作废",
      "consumes": [
        "application/json"
      ],
      "operationId": "obsoleteUsingPUT",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}