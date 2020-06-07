{
  "path": "/inspect-task/site/jobs",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
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
            "type": "string",
            "name": "qrcodeDynamicCode",
            "description": "点位码Code",
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-点位-扫码任务列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findJobsUsingGET",
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