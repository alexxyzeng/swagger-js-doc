{
  "path": "/space/searchByFloorId",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "spFloorId",
            "description": "楼层ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "根据sp_floor_id 查找空间列",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByFloorIdUsingGET",
      "tags": [
        "base-building-space"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf空间信息"
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