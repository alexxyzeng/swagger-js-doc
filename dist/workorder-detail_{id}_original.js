{
  "path": "/workorder-detail/{id}",
  "methods": {
    "get": {
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
      "summary": "工单详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET_5",
      "tags": [
        "workorder-detail"
      ]
    }
  }
}