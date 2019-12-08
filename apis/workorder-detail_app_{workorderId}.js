{
  "path": "/workorder-detail/app/{workorderId}",
  "methods": {
    "get": {
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
      "summary": "工单详情-app",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailOfAppUsingGET",
      "tags": [
        "workorder-app",
        "workorder-detail"
      ]
    }
  }
}