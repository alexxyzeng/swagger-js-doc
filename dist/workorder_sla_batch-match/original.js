{
  "path": "/workorder/sla/batch-match",
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
            "description": "dto",
            "name": "dto"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量匹配sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchMatchUsingPOST",
      "tags": [
        "workorder-sla"
      ]
    }
  }
}