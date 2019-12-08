{
  "path": "/workorder-approval/approval/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "result": {
              "type": "string",
              "description": "拒绝/通过原因",
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "操作类型 0-拒绝 1-通过 是否枚举{否=No, 是=Yes}",
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
      "summary": "工单审批操作",
      "consumes": [
        "application/json"
      ],
      "operationId": "approvalUsingPUT",
      "tags": [
        "workorder-approval"
      ]
    }
  }
}