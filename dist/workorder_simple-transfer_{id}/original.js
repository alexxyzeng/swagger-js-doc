{
  "path": "/workorder/simple-transfer/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "转单信息查询",
      "consumes": [
        "application/json"
      ],
      "operationId": "simpleOfTransferUsingGET",
      "tags": [
        "workorder"
      ]
    }
  }
}