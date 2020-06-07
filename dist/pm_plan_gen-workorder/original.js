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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of维保计划-响应"
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