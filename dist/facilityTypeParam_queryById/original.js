{
  "path": "/facilityTypeParam/queryById",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "根据参数id查询参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "queryByIdUsingGET_1",
      "tags": [
        "facility-type-param"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of设施分类对应的参数"
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