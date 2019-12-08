{
  "path": "/workorder/{id}/addExecutor",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "execEmployeeId": {
              "type": "number",
              "description": "执行员工id",
              "required": false,
              "enum": []
            },
            "execEmployeeName": {
              "type": "string",
              "description": "执行人名称",
              "enum": []
            },
            "isCharged": {
              "type": "string",
              "description": "是否负责人 0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
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
      "summary": "增派",
      "consumes": [
        "application/json"
      ],
      "operationId": "addExecutorUsingPUT",
      "tags": [
        "workorder"
      ]
    }
  }
}