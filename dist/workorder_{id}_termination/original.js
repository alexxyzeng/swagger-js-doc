{
  "path": "/workorder/{id}/termination",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "desc": {
              "type": "string",
              "description": "终止原因",
              "enum": []
            },
            "isTransfer": {
              "type": "string",
              "description": "是否转单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
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
      "summary": "终止",
      "consumes": [
        "application/json"
      ],
      "operationId": "terminationUsingPUT",
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