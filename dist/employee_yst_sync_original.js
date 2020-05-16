{
  "path": "/employee/yst/sync",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": true,
            "description": "ystIds"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "根据一事通号同步相应一事通人员信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "ystUpdateUsingPOST",
      "tags": [
        "base-employee"
      ]
    }
  }
}