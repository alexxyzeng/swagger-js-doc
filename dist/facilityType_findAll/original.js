{
  "path": "/facilityType/findAll",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查询所有设施分类",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllUsingGET_1",
      "tags": [
        "facility-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf设施分类"
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