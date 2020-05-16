{
  "path": "/demand/{id}/review",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "内容",
              "enum": []
            },
            "isPass": {
              "type": "boolean",
              "description": "是否通过",
              "enum": []
            }
          }
        ],
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
      "summary": "需求审核",
      "consumes": [
        "application/json"
      ],
      "operationId": "reviewUsingPUT",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}