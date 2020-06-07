{
  "path": "/undertake/task/site/{id}/content",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "承接查验-任务-对象(位置)-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findContentByIdUsingGET_1",
      "tags": [
        "undertake-task-site"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of承接查验-任务-对象(位置)-内容-响应"
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