{
  "path": "/inspect-task/job/exec",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "userId",
            "description": "用户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskId",
            "description": "巡检任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "status",
            "description": "工作任务状态 {未完成=Unfinished-1, 已完成=Complete-2}",
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-工作任务-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "execUsingGET",
      "tags": [
        "inspect-task"
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
}