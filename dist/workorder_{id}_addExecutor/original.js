{
  "path": "/workorder/{id}/addExecutor",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "execEmployeeId": {
              "type": "number",
              "description": "执行员工id",
              "required": false,
              "enum": []
            },
            "execEmployeeName": {
              "type": "string",
              "description": "执行人名称",
              "enum": []
            },
            "isCharged": {
              "type": "string",
              "description": "是否负责人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
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
      "summary": "增派",
      "consumes": [
        "application/json"
      ],
      "operationId": "addExecutorUsingPUT_1",
      "tags": [
        "workorder"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-执行人-响应"
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