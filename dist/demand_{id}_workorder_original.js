{
  "path": "/demand/{id}/workorder",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "description": "",
              "enum": []
            },
            "required": true,
            "description": "dtos"
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
      "summary": "创建工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "createWorkorderUsingPUT",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}