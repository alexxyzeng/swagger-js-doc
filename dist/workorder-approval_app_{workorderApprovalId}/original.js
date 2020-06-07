{
  "path": "/workorder-approval/app/{workorderApprovalId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "workorderApprovalId",
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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单审批详情"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
}