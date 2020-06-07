{
  "path": "/work-team/tree",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "工作组列表树形结构",
      "consumes": [
        "application/json"
      ],
      "operationId": "getTreeUsingGET",
      "tags": [
        "work-team"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfCollectionOf工作组简要信息"
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