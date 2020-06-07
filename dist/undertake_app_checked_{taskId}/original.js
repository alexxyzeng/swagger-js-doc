{
  "path": "/undertake/app/checked/{taskId}",
  "methods": {
    "put": {
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
      "summary": "对象完成查验",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkedByTaskIdUsingPUT",
      "tags": [
        "undertake-app"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "201": {
          "description": "Created"
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