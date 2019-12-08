{
  "path": "/workorder-approval",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "approverDtos": {
              "type": "array",
              "valueType": {
                "employeeId": {
                  "type": "number",
                  "description": "审批人id",
                  "required": false,
                  "enum": []
                },
                "employeeName": {
                  "type": "string",
                  "description": "审批人名称",
                  "enum": []
                }
              },
              "required": false
            },
            "content": {
              "type": "string",
              "description": "审批内容",
              "enum": []
            },
            "woWorkorderId": {
              "type": "number",
              "description": "工单id",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "工单审批申请",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_48",
      "tags": [
        "workorder-approval"
      ]
    }
  }
}