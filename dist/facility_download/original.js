{
  "path": "/facility/download",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "lastUpdatedTimestamp",
            "description": "lastUpdatedTimestamp",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "设备离线数据下载",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByLastUpdatedTimestampUsingGET_1",
      "tags": [
        "facility"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf设备-离线下载信息"
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