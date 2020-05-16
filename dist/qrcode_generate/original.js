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
      ]
    }
  }
}