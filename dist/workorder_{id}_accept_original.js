{
  "path": "/workorder/{id}/accept",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": [
          {
            "type": "number",
            "description": "工单执行人主键ID",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "description": "工单执行人ID",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "description": "工单执行人名称",
            "enum": []
          }
        ]
      },
      "summary": "接单",
      "consumes": [
        "application/json"
      ],
      "operationId": "acceptUsingPUT",
      "tags": [
        "workorder"
      ]
    }
  }
}