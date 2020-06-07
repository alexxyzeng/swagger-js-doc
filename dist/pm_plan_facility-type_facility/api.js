[
  "/pm/plan/facility-type/facility",
  {
    "get": {
      "tags": [
        "pm-plan"
      ],
      "summary": "查询维保设备分类关联设备",
      "operationId": "findFacilitiesUsingGET",
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
          "name": "maintId",
          "in": "query",
          "description": "设置id",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "planDate",
          "in": "query",
          "description": "计划日期",
          "required": true,
          "type": "string",
          "format": "date"
        },
        {
          "name": "facilityCode",
          "in": "query",
          "description": "设备编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityName",
          "in": "query",
          "description": "设备名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityType",
          "in": "query",
          "description": "系统分类",
          "required": false,
          "type": "string"
        },
        {
          "name": "mountSpace",
          "in": "query",
          "description": "安装位置",
          "required": false,
          "type": "string"
        },
        {
          "name": "isMaintained",
          "in": "query",
          "description": "是否维保 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of维保设置-设备分类关联设备-响应"
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