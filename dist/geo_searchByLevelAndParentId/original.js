{
  "path": "/geo/searchByLevelAndParentId",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "parentId",
            "description": "父ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "Level",
            "description": "层级",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "根据level parentId 得到行政区划列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByLevelAndParentIdUsingGET",
      "tags": [
        "base-geo"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf行政级别信息"
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