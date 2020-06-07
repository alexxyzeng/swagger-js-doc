{
  "path": "/building/searchByIds",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "房产ID列表",
            "name": "spBuildingIds"
          }
        ]
      },
      "summary": "查找房产列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdsUsingGET",
      "tags": [
        "base-building-building"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf大厦信息"
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