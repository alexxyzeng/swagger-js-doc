[
  "/workorder-approval/search",
  {
    "get": {
      "tags": [
        "workorder-approval"
      ],
      "summary": "查询工单审批列表",
      "operationId": "searchUsingGET_6",
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
          "name": "woCode",
          "in": "query",
          "description": "工单编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "woDescription",
          "in": "query",
          "description": "工单描述",
          "required": false,
          "type": "string"
        },
        {
          "name": "content",
          "in": "query",
          "description": "审批内容",
          "required": false,
          "type": "string"
        },
        {
          "name": "startTime",
          "in": "query",
          "description": "创建开始事件",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "endTime",
          "in": "query",
          "description": "创建结束事件",
          "required": false,
          "type": "string",
          "format": "date-time"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of工单-审批表-响应"
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