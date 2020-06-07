[
  "/inspect-site/plan/job",
  {
    "get": {
      "tags": [
        "inspect-site"
      ],
      "summary": "巡检点位-工作任务-计划添加列表",
      "operationId": "findForPlanUsingGET",
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
          "name": "projectId",
          "in": "query",
          "description": "项目ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "siteId",
          "in": "query",
          "description": "点位ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spBuildingId",
          "in": "query",
          "description": "大厦ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spFloorId",
          "in": "query",
          "description": "楼层ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spSpaceId",
          "in": "query",
          "description": "空间ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "mountSpace",
          "in": "query",
          "description": "安装位置",
          "required": false,
          "type": "string"
        },
        {
          "name": "site",
          "in": "query",
          "description": "点位名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "job",
          "in": "query",
          "description": "工作任务",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检点位-工作任务-计划选择响应"
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