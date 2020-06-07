{
  "path": "/employee/{userId}/name-info",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "name": {
              "type": "string",
              "description": "姓名",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "userId",
            "description": "userId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改用户姓名信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateNameInfoUsingPUT",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfEmployeeBaseInfoRspDto"
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