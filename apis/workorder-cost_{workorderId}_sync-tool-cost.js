{
  "path": "/workorder-cost/{workorderId}/sync-tool-cost",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": [
          {
            "type": "string",
            "description": "isSyncToolCost",
            "enum": [
              "0",
              "1"
            ]
          }
        ]
      },
      "summary": "修改工具费用是否计入",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPUT",
      "tags": [
        "workorder-cost"
      ]
    }
  }
}