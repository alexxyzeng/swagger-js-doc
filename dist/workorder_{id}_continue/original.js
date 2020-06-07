{
  "path": "/workorder/{id}/continue",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "execEmployeeId": {
              "type": "number",
              "description": "工单执行人ID",
              "required": false,
              "enum": []
            },
            "execEmployeeName": {
              "type": "string",
              "description": "工单执行人名称",
              "enum": []
            },
            "woExecEmployeeId": {
              "type": "number",
              "description": "工单执行人主键ID",
              "required": false,
              "enum": []
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
      "summary": "继续",
      "consumes": [
        "application/json"
      ],
      "operationId": "continuedUsingPUT",
      "tags": [
        "workorder"
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