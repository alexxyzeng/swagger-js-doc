{
  "path": "/workorder/{id}/archive",
  "methods": {
    "put": {
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
      "summary": "存档",
      "consumes": [
        "application/json"
      ],
      "operationId": "archiveUsingPUT",
      "tags": [
        "workorder"
      ]
    }
  }
}