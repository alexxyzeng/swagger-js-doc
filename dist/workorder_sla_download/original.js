{
  "path": "/workorder/sla/download",
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
      "summary": "流程设置离线数据下载",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByLastUpdatedTimestampUsingGET_4",
      "tags": [
        "workorder-sla"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单-流程设置-download-响应"
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