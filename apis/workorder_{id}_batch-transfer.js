{
  "path": "/workorder/{id}/batch-transfer",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "description": "dtos",
            "enum": []
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
      "summary": "转单-生成多个工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchTransferUsingPUT",
      "tags": [
        "workorder"
      ]
    }
  }
}