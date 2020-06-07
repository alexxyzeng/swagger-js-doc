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
            "name": "qrcode",
            "description": "二维码字符串",
            "enum": []
          },
          {
            "type": "number",
            "name": "warehouseId",
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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of库存明细-响应"
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