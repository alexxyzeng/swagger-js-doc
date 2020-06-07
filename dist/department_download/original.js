{
  "path": "/department/download",
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
      "summary": "部门离线数据下载",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByLastUpdatedTimestampUsingGET",
      "tags": [
        "base-org-department"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfCollectionOf部门列表响应信息-树结构"
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