[
  "/inspect-task/site/jobs",
  {
    "get": {
      "tags": [
        "inspect-task"
      ],
      "summary": "巡检任务-点位-扫码任务列表",
      "operationId": "findJobsUsingGET",
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
          "name": "qrcodeDynamicCode",
          "in": "query",
          "description": "点位码Code",
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