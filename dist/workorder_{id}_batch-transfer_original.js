{
  "path": "/workorder/{id}/batch-transfer",
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