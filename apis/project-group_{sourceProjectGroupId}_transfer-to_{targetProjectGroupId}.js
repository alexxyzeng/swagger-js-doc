{
  "path": "/project-group/{sourceProjectGroupId}/transfer-to/{targetProjectGroupId}",
  "methods": {
    "post": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "sourceProjectGroupId",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "description": "targetProjectGroupId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "转移项目组内项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "transferProjectsUsingPOST",
      "tags": [
        "base-project-group"
      ]
    }
  }
}