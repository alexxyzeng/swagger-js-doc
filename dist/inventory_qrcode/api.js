[
  "/inventory/qrcode",
  {
    "get": {
      "tags": [
        "inventory"
      ],
      "summary": "库存-扫一扫物资详情",
      "operationId": "findByQrCodeUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "qrcode",
          "in": "query",
          "description": "二维码字符串",
          "required": false,
          "type": "string"
        },
        {
          "name": "warehouseId",
          "in": "query",
          "description": "仓库ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
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
]