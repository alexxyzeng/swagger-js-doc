{
  "path": "/workorder/batch",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "description": "",
              "enum": []
            },
            "required": true,
            "description": "workorderDtos",
            "name": "workorderDtos"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "创建工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchCreateUsingPOST",
      "tags": [
        "workorder"
      ]
    }
  }
}