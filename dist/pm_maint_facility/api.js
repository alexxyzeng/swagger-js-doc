[
  "/pm/maint/facility",
  {
    "put": {
      "tags": [
        "pm"
      ],
      "summary": "维保设备列表筛选",
      "operationId": "findFacilityUsingPUT",
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
          "name": "facilityIds",
          "in": "query",
          "description": "设备ID",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
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
          "name": "pageNumber",
          "in": "query",
          "description": "当前页",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "pageSize",
          "in": "query",
          "description": "每页条数",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "pageSort",
          "in": "query",
          "description": "排序",
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
            "$ref": "#/definitions/统一响应体Of分页响应体Of工单关联设备展示信息"
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