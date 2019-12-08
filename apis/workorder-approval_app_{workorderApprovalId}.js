{
  "path": "/workorder-approval/app/{workorderApprovalId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "workorderApprovalId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询工单审批详情-app",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchOfAppByIdUsingGET",
      "tags": [
        "workorder-app",
        "workorder-approval"
      ]
    }
  }
}