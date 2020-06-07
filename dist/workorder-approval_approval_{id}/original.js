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
              "description": "操作类型 0-拒绝 1-通过 是否枚举{否=No-0, 是=Yes-1}",
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
            "name": "id",
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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-审批表-响应"
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