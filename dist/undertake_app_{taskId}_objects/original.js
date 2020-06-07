{
  "path": "/undertake/app/{taskId}/objects",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "taskId",
            "description": "taskId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查验对象列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findObjectsByTaskIdUsingGET",
      "tags": [
        "undertake-app"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf承接查验-任务-查验对象-列表-APP-响应"
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