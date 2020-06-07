{
  "path": "/project/level/{parentId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "parentId",
            "description": "parentId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "按层级查询项目信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchByLevelUsingGET_1",
      "tags": [
        "base-project"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOfIdNameDTO"
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