{
  "path": "/demand/{id}",
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
      "summary": "需求-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_3",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}