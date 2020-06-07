{
  "path": "/undertake/task/facility/{id}/content",
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
      "summary": "承接查验-任务-对象(设备)-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findContentByIdUsingGET",
      "tags": [
        "undertake-task-facility"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of承接查验-任务-对象(设备)-内容-响应"
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