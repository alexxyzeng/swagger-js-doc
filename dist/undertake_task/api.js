[
  "/undertake/task",
  {
    "get": {
      "tags": [
        "undertake-task"
      ],
      "summary": "承接查验-任务-列表",
      "operationId": "findUsingGET_59",
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
          "name": "name",
          "in": "query",
          "description": "查验任务名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "takeFrom",
          "in": "query",
          "description": "交验方",
          "required": false,
          "type": "string"
        },
        {
          "name": "takeOver",
          "in": "query",
          "description": "接管方",
          "required": false,
          "type": "string"
        },
        {
          "name": "checker",
          "in": "query",
          "description": "查验人",
          "required": false,
          "type": "string"
        },
        {
          "name": "accepter",
          "in": "query",
          "description": "验收人",
          "required": false,
          "type": "string"
        },
        {
          "name": "startStartTime",
          "in": "query",
          "description": "开始时间-区间开始",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "startEndTime",
          "in": "query",
          "description": "开始时间-区间结束",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "completedStartTime",
          "in": "query",
          "description": "完成时间-区间开始",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "completedEndTime",
          "in": "query",
          "description": "完成时间-区间结束",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "isException",
          "in": "query",
          "description": "是否异常 pc使用 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "status",
          "in": "query",
          "description": "状态 {已创建=Created-1, 处理中=InProgress-2, 已完成=Completed-3, 已验证=Acceptance-4}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "objectStatusSet",
          "in": "query",
          "description": "对象状态 app使用 {正常=Normal-1, 异常=Except-2, 整改=Rectification-3}",
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
            "$ref": "#/definitions/统一响应体Of分页响应体Of承接查验-任务-列表-响应"
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
        "undertake-task"
      ],
      "summary": "新增承接查验-任务",
      "operationId": "createUsingPOST_45",
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
            "$ref": "#/definitions/承接查验-任务"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of承接查验-任务-响应"
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