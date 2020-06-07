[
  "/inspect-task/content",
  {
    "get": {
      "tags": [
        "inspect-task"
      ],
      "summary": "巡检任务-内容-列表",
      "operationId": "findUsingGET_33",
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
          "name": "taskObjectId",
          "in": "query",
          "description": "巡检任务-工作任务-对象ID",
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
          "name": "jobType",
          "in": "query",
          "description": "任务类型 1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}",
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
          "name": "runStatus",
          "in": "query",
          "description": "设备状态 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}",
          "required": false,
          "type": "string"
        },
        {
          "name": "eqRunStatus",
          "in": "query",
          "description": "设备状态-精确匹配 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}",
          "required": false,
          "type": "string"
        },
        {
          "name": "content",
          "in": "query",
          "description": "巡检内容",
          "required": false,
          "type": "string"
        },
        {
          "name": "result",
          "in": "query",
          "description": "巡检结果",
          "required": false,
          "type": "string"
        },
        {
          "name": "status",
          "in": "query",
          "description": "状态 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}",
          "required": false,
          "type": "string"
        },
        {
          "name": "exceptionHandleResult",
          "in": "query",
          "description": "异常处理结果 {已处理=Dispose-1, 未处理=Undispose-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "exceptionHandleWay",
          "in": "query",
          "description": "异常处理方式 {现状处理=Situation-1, 报修工单=Workorder-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "faultDescription",
          "in": "query",
          "description": "现场描述",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检任务-内容-响应"
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
      "summary": "新增巡检任务-内容",
      "operationId": "createUsingPOST_25",
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
            "$ref": "#/definitions/巡检任务-内容"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检任务-内容-响应"
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
    },
    "put": {
      "tags": [
        "inspect-task"
      ],
      "summary": "批量删除巡检任务-内容",
      "operationId": "deleteUsingPUT_8",
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
          "name": "idx",
          "description": "idx",
          "required": true,
          "schema": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            }
          }
        }
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
]