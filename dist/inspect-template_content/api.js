[
  "/inspect-template/content",
  {
    "get": {
      "tags": [
        "inspect-template"
      ],
      "summary": "巡检模板-内容-列表",
      "operationId": "findUsingGET_42",
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
          "name": "templateId",
          "in": "query",
          "description": "模板ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "content",
          "in": "query",
          "description": "内容",
          "required": false,
          "type": "string"
        },
        {
          "name": "model",
          "in": "query",
          "description": "模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}",
          "required": false,
          "type": "string"
        },
        {
          "name": "type",
          "in": "query",
          "description": "类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "runStatus",
          "in": "query",
          "description": "运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}",
          "required": false,
          "type": "string"
        },
        {
          "name": "defaultVal",
          "in": "query",
          "description": "默认值",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检模板-内容-响应"
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
        "inspect-template"
      ],
      "summary": "批量删除巡检模板-内容",
      "operationId": "deleteUsingPUT_9",
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
            "$ref": "#/definitions/统一响应体Ofboolean"
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