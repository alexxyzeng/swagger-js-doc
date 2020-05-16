{
  "path": "/workorder/{id}/suspend",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "desc": {
              "type": "string",
              "description": "暂停描述",
              "enum": []
            },
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
            "isAllSuspend": {
              "type": "string",
              "description": "是否全部暂停 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isContinue": {
              "type": "string",
              "description": "是否继续 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
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
      "summary": "暂停",
      "consumes": [
        "application/json"
      ],
      "operationId": "suspendUsingPUT",
      "tags": [
        "workorder"
      ]
    }
  }
}