{
  "path": "/demand/numbers-group-by-status",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "获取各个状态对应的需求数量",
      "consumes": [
        "application/json"
      ],
      "operationId": "numbersGroupByStatusUsingGET",
      "tags": [
        "service-center-demand"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf需求状态对应的需求数量-响应"
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