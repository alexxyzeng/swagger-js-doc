{
  "path": "/inventory/{id}/safe-stock",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "safeStock": {
              "type": "number",
              "description": "安全库存",
              "enum": []
            }
          }
        ],
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
      "summary": "修改安全库存",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_40",
      "tags": [
        "inventory"
      ]
    }
  }
}