{
  "path": "/workorder/{workorderId}/worker",
  "methods": {
    "get": {
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
        "query": []
      },
      "summary": "查询未派工执行人",
      "consumes": [
        "application/json"
      ],
      "operationId": "findWorkerUsingGET",
      "tags": [
        "workorder"
      ]
    }
  }
}