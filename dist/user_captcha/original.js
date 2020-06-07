{
  "path": "/user/captcha",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "获取验证码",
      "consumes": [
        "application/json"
      ],
      "operationId": "getCaptchaUsingGET",
      "tags": [
        "app-index",
        "base-user-login"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of验证码响应参数"
          }
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