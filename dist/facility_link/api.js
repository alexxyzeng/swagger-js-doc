[
  "/facility/link",
  {
    "get": {
      "tags": [
        "facility"
      ],
      "summary": "设备台帐-选择关联设备(默认上级设备)",
      "operationId": "findUpAndDownFacilityUsingGET",
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
          "description": "设备台帐ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "exId",
          "in": "query",
          "description": "不包含设备ID(编辑时使用)",
          "required": false,
          "type": "integer",
          "format": "int64"
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
          "name": "facilityLevel",
          "in": "query",
          "description": "设备级别dict_type=facility_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
          "required": false,
          "type": "string"
        },
        {
          "name": "currentLevel",
          "in": "query",
          "description": "设备级别dict_type=facility_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
          "required": false,
          "type": "string"
        },
        {
          "name": "levels",
          "in": "query",
          "description": "levels",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int32"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "facilityType",
          "in": "query",
          "description": "设备分类",
          "required": false,
          "type": "string"
        },
        {
          "name": "mountSpace",
          "in": "query",
          "description": "安装位置",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of设备展示信息"
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