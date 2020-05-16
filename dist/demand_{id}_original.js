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
        "query": [
          {
            "type": "string",
            "description": "isClearUnreadCommonCount",
            "enum": [
              "0",
              "1"
            ]
          }
        ]
      },
      "summary": "需求-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_4",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}