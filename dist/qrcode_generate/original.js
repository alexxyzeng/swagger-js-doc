{
  "path": "/qrcode/generate",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "content",
            "description": "内容",
            "enum": []
          },
          {
            "type": "string",
            "name": "word",
            "description": "文本",
            "enum": []
          }
        ]
      },
      "summary": "生成二维码",
      "consumes": [
        "application/json"
      ],
      "operationId": "generateUsingGET",
      "tags": [
        "qrcode"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
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