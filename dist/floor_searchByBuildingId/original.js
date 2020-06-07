{
  "path": "/floor/searchByBuildingId",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "spBuildingId",
            "description": "房产ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查找楼层",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByBuildingIdUsingGET",
      "tags": [
        "base-building-floor"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf楼层信息"
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