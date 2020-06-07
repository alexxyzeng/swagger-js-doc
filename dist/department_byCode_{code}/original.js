{
  "path": "/department/byCode/{code}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "code",
            "description": "code",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查找指定编码的部门",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByCodeUsingGET",
      "tags": [
        "base-org-department"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of部门信息-响应"
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