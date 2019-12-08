{
  "path": "/workorder/{workOrderId}/update-pm-step",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "isComplete": {
              "type": "string",
              "description": "是否完成 0、未完成 1、已完成 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "stepDesc": {
              "type": "string",
              "description": "工作描述",
              "enum": []
            },
            "stepId": {
              "type": "number",
              "description": "维保步骤ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "workOrderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "更新维保步骤",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateStepUsingPUT",
      "tags": [
        "workorder"
      ]
    }
  }
}