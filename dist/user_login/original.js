{
  "path": "/user/login",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "captchaCode": {
              "type": "string",
              "description": "验证码",
              "enum": []
            },
            "deviceToken": {
              "type": "string",
              "description": "设备信息",
              "enum": []
            },
            "loginName": {
              "type": "string",
              "description": "登录名",
              "enum": []
            },
            "password": {
              "type": "string",
              "description": "密码",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "登录",
      "consumes": [
        "application/json"
      ],
      "operationId": "loginUsingPOST",
      "tags": [
        "app-index",
        "base-user-login"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of登录响应参数"
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