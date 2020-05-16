{
  "path": "/workorder-approval/{id}",
  "methods": {
    "get": {
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
      "summary": "查询工单审批详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchByIdUsingGET",
      "tags": [
        "workorder-approval"
      ]
    }
  }
}