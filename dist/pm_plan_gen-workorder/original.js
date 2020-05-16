{
  "path": "/pm/plan/gen-workorder",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "计划id",
              "required": false,
              "enum": []
            },
            "maintId": {
              "type": "number",
              "description": "设置id",
              "required": false,
              "enum": []
            },
            "planDate": {
              "type": "string",
              "description": "计划时间",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "手动生成工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "createWorkorderUsingPOST",
      "tags": [
        "pm-plan"
      ]
    }
  }
}