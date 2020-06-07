{
  "path": "/facility/id_by_qrcode",
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
          }
        ]
      },
      "summary": "扫描设备码获取设备ID",
      "consumes": [
        "application/json"
      ],
      "operationId": "findIdByQrcodeUsingGET",
      "tags": [
        "facility"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Oflong"
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