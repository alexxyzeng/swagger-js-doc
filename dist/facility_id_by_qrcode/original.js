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
      ]
    }
  }
}