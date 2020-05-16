{
  "path": "/workorder-cost/{workorderId}/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "workorderId",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询费用列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllUsingGET_6",
      "tags": [
        "workorder-cost"
      ]
    }
  }
}