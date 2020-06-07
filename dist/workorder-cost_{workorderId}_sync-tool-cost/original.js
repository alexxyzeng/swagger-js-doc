{
  "path": "/workorder-cost/{workorderId}/sync-tool-cost",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "isSyncToolCost": {
              "type": "string",
              "description": "是否同步工具费用 是否枚举{否=No-0, 是=Yes-1}",
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
            "name": "workorderId",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改工具费用是否计入",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateIsSyncToolCostUsingPUT",
      "tags": [
        "workorder-cost"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-费用表-响应"
          }
        },
        "201": {
          "description": "Created"
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