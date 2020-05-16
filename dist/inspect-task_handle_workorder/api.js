[
  "/inspect-task/handle/workorder",
  {
    "get": {
      "tags": [
        "inspect-task"
      ],
      "summary": "巡检任务-工单列表",
      "operationId": "workorderUsingGET",
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
          "name": "pageNumber",
          "in": "query",
          "description": "获取当前页",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "pageSize",
          "in": "query",
          "description": "每页显示的数量",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "pageSort",
          "in": "query",
          "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
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
          "name": "taskId",
          "in": "query",
          "description": "巡检任务ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "jobType",
          "in": "query",
          "description": "任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityId",
          "in": "query",
          "description": "设备ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "taskJobId",
          "in": "query",
          "description": "巡检任务-工作任务ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "taskObjectId",
          "in": "query",
          "description": "巡检任务-工作对象ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "taskContentId",
          "in": "query",
          "description": "巡检任务内容ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检任务-工单-响应"
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
    },
    "post": {
      "tags": [
        "inspect-task"
      ],
      "summary": "新增巡检任务-报修工单",
      "operationId": "workorderUsingPOST",
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
          "in": "body",
          "name": "dto",
          "description": "dto",
          "required": true,
          "schema": {
            "$ref": "#/definitions/巡检任务-工单"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检任务-工单-响应"
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
]