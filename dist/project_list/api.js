[
  "/project/list",
  {
    "get": {
      "tags": [
        "base-project"
      ],
      "summary": "项目列表&搜索-无数据权限",
      "operationId": "listUsingGET_2",
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
          "name": "projectName",
          "in": "query",
          "description": "项目名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "projectGroupName",
          "in": "query",
          "description": "项目组名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "projectStatus",
          "in": "query",
          "description": "项目状态: 1、未开始 2、服务中 3、预警 4、过期 {未开始=NotStart-1, 服务中=Serving-2, 预警中=Warning-3, 已过期=Expired-4}",
          "required": false,
          "type": "string"
        },
        {
          "name": "createTimeStartDate",
          "in": "query",
          "description": "创建开始时间",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "createTimeEndDate",
          "in": "query",
          "description": "创建结束时间",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "serviceStartDate",
          "in": "query",
          "description": "服务开始时间",
          "required": false,
          "type": "string"
        },
        {
          "name": "serviceEndDate",
          "in": "query",
          "description": "服务结束时间",
          "required": false,
          "type": "string"
        },
        {
          "name": "serviceEndDateStartDate",
          "in": "query",
          "description": "服务结束时间查询开始时间",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "serviceEndDateEndDate",
          "in": "query",
          "description": "服务结束时间查询结束时间",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "maxUser",
          "in": "query",
          "description": "授权用户数",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "usedUser",
          "in": "query",
          "description": "使用用户数",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "code",
          "in": "query",
          "description": "项目编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "identifier",
          "in": "query",
          "description": "项目标识号",
          "required": false,
          "type": "string"
        },
        {
          "name": "bizType",
          "in": "query",
          "description": "项目业态",
          "required": false,
          "type": "string"
        },
        {
          "name": "geoId",
          "in": "query",
          "description": "地理位置ID，可以是省、市、区",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of项目信息"
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