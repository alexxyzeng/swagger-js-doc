{
  "path": "/workorder/{id}/dispatch",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "工作内容",
              "enum": []
            },
            "executorDtos": {
              "type": "array",
              "valueType": {
                "type": "object",
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
                  "description": "是否负责人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
                  "enum": [
                    "0",
                    "1"
                  ]
                }
              },
              "required": false,
              "description": "执行人信息"
            },
            "expectEndTime": {
              "type": "string",
              "description": "预计结束时间",
              "enum": []
            },
            "expectStartTime": {
              "type": "string",
              "description": "预计开始时间",
              "enum": []
            },
            "expectWorkTime": {
              "type": "string",
              "description": "预计工作时间",
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
      "summary": "排程派工",
      "consumes": [
        "application/json"
      ],
      "operationId": "dispatchUsingPUT",
      "tags": [
        "workorder"
      ]
    }
  }
}