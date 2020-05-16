[
  "/inspect-site/job/content",
  {
    "get": {
      "tags": [
        "inspect-site"
      ],
      "summary": "巡检点位-工作任务-内容-列表",
      "operationId": "findUsingGET_27",
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
          "name": "jobId",
          "in": "query",
          "description": "工作任务ID",
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
          "name": "model",
          "in": "query",
          "description": "模式 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}",
          "required": false,
          "type": "string"
        },
        {
          "name": "runStatus",
          "in": "query",
          "description": "运行状态 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}",
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
          "name": "templateName",
          "in": "query",
          "description": "巡检模板名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "result",
          "in": "query",
          "description": "结果",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检点位-工作任务-内容-响应"
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
    "put": {
      "tags": [
        "inspect-site"
      ],
      "summary": "批量删除巡检点位-工作任务-内容",
      "operationId": "deleteUsingPUT_6",
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