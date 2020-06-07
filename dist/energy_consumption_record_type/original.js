{
  "path": "/energy/consumption/record/type",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "能耗类型-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "getTypeUsingGET",
      "tags": [
        "energy-consumption-record"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf能耗类型"
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