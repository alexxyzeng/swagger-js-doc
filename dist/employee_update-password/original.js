{
  "path": "/employee/update-password",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "newPassword": {
              "type": "string",
              "description": "新密码",
              "enum": []
            },
            "oldPassword": {
              "type": "string",
              "description": "原密码",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "用户修改密码",
      "consumes": [
        "application/json"
      ],
      "operationId": "updatePasswordUsingPUT",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
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