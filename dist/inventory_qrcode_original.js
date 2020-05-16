{
  "path": "/inventory/qrcode",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "二维码字符串",
            "enum": []
          },
          {
            "type": "number",
            "description": "仓库ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "库存-扫一扫物资详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByQrCodeUsingGET",
      "tags": [
        "inventory"
      ]
    }
  }
}