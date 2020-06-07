[
  "/inspect-task/job/exec",
  {
    "get": {
      "tags": [
        "inspect-task"
      ],
      "summary": "巡检任务-工作任务-列表",
      "operationId": "execUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "id",
          "in": "query",
          "description": "ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "projectId",
          "in": "query",
          "description": "项目ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "userId",
          "in": "query",
          "description": "用户ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "taskId",
          "in": "query",
          "description": "巡检任务ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "status",
          "in": "query",
          "description": "工作任务状态 {未完成=Unfinished-1, 已完成=Complete-2}",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf巡检待完成任务-点位-响应"
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
]