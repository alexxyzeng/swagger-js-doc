{
  "path": "/inventory/{id}/safe-stock",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "safeStock": {
              "type": "number",
              "description": "安全库存",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改安全库存",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_40",
      "tags": [
        "inventory"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of库存明细-响应"
          }
        },
        "201": {
          "description": "Created"
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