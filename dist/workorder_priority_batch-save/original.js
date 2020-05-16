{
  "path": "/workorder/priority/batch-save",
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
            "description": "priorityDtos",
            "name": "priorityDtos"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "优先级信息批量保存",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchSaveUsingPOST",
      "tags": [
        "workorder-priority"
      ]
    }
  }
}