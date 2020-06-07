{
  "path": "/workorder/{id}/check",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "desc": {
              "type": "string",
              "description": "不通过原因",
              "enum": []
            },
            "isPass": {
              "type": "string",
              "description": "验证结果 0-不通过 1-通过 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "woWorkorderId": {
              "type": "number",
              "description": "工单id",
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
      "summary": "验证",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkUsingPUT",
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