{
  "path": "/workorder/{id}/continue",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "execEmployeeId": {
              "type": "number",
              "description": "工单执行人ID",
              "required": false,
              "enum": []
            },
            "execEmployeeName": {
              "type": "string",
              "description": "工单执行人名称",
              "enum": []
            },
            "woExecEmployeeId": {
              "type": "number",
              "description": "工单执行人主键ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "继续",
      "consumes": [
        "application/json"
      ],
      "operationId": "continuedUsingPUT",
      "tags": [
        "workorder"
      ]
    }
  }
}