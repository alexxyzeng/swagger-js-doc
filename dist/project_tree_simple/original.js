{
  "path": "/project/tree/simple",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "projectName",
            "description": "项目名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "excludeProjectId",
            "description": "不返回的项目id",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查询项目信息, 返回树",
      "consumes": [
        "application/json"
      ],
      "operationId": "findTreeUsingGET",
      "tags": [
        "base-project"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfCollectionOf项目信息-Simple"
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