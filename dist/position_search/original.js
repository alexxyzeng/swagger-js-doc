{
  "path": "/position/search",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "查找岗位列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_2",
      "tags": [
        "base-org-position"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfCollectionOf岗位列表响应信息-树结构"
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