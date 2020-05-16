[
  "/pm/maint",
  {
    "get": {
      "tags": [
        "pm"
      ],
      "summary": "维保规则列表",
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
          "description": "项目id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "facilityId",
          "in": "query",
          "description": "设备id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "facilityTypeId",
          "in": "query",
          "description": "设备分类id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "facilityTypeName",
          "in": "query",
          "description": "设备分类",
          "required": false,
          "type": "string"
        },
        {
          "name": "spaceIds",
          "in": "query",
          "description": "大楼|楼层|房间 位置id",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "spaceName",
          "in": "query",
          "description": "大楼|楼层|房间 位置",
          "required": false,
          "type": "string"
        },
        {
          "name": "name",
          "in": "query",
          "description": "维保名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "cycleUnit",
          "in": "query",
          "description": "周期单位 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}",
          "required": false,
          "type": "string"
        },
        {
          "name": "isSlideCycle",
          "in": "query",
          "description": "是否滑动周期1-是；0-否 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "nextDateBegin",
          "in": "query",
          "description": "下次维保日期开始",
          "required": false,
          "type": "string",
          "format": "date"
        },
        {
          "name": "nextDateEnd",
          "in": "query",
          "description": "下次维保日期结束",
          "required": false,
          "type": "string",
          "format": "date"
        },
        {
          "name": "isAutoWorkorder",
          "in": "query",
          "description": "是否自动生成工单 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "status",
          "in": "query",
          "description": "设置状态0-暂停；1-启用 {启用=Enable-1, 暂停=Pause-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "keyWord",
          "in": "query",
          "description": "关键词查询，用于日历查询",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of维保列表-响应"
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
        "pm"
      ],
      "summary": "新增设置",
      "operationId": "createUsingPOST_27",
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
            "$ref": "#/definitions/维保"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of维保-响应"
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