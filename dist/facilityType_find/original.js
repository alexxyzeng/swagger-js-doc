{
  "path": "/facilityType/find",
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
      "summary": "查询设施分类",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_21",
      "tags": [
        "facility-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of设施分类"
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