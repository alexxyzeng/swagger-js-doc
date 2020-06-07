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
                "type": "object",
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
              "required": false,
              "description": "审批人"
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
      "operationId": "createUsingPOST_55",
      "tags": [
        "workorder-approval"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单详情"
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