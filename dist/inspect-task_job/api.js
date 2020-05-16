[
  "/inspect-task/job",
  {
    "get": {
      "tags": [
        "inspect-task"
      ],
      "summary": "巡检任务-工作任务-列表",
      "operationId": "findUsingGET_34",
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
          "name": "site",
          "in": "query",
          "description": "点位",
          "required": false,
          "type": "string"
        },
        {
          "name": "job",
          "in": "query",
          "description": "工作任务",
          "required": false,
          "type": "string"
        },
        {
          "name": "status",
          "in": "query",
          "description": "工作任务状态 {未完成=Unfinished-1, 已完成=Complete-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "statuses",
          "in": "query",
          "description": "工作任务状态 {正常=Normal-1, 异常=AbNormal-2, 漏检=Miss-3, 补检=Supplement-4, 报修=Repair-5}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检任务-点位-工作任务-响应"
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