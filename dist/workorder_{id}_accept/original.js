{
  "path": "/workorder/{id}/accept",
  "methods": {
    "put": {
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
        "query": [
          {
            "type": "number",
            "name": "woExecEmployeeId",
            "description": "工单执行人主键ID",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "name": "execEmployeeId",
            "description": "工单执行人ID",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "name": "execEmployeeName",
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