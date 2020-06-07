{
  "path": "/inspect-task/job/{id}/set-operator",
  "methods": {
    "put": {
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
      "summary": "巡检任务-工作任务-操作人员",
      "consumes": [
        "application/json"
      ],
      "operationId": "setOperatorUsingPUT",
      "tags": [
        "inspect-task"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofboolean"
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