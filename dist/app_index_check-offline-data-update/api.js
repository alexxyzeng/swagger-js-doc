[
  "/app/index/check-offline-data-update",
  {
    "get": {
      "tags": [
        "app-index"
      ],
      "summary": "离线数据是否有更新",
      "operationId": "offlineDataHasUpdateUsingGET",
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
          "name": "facilityLastUpdatedTimestamp",
          "in": "query",
          "description": "设备信息最后一次更新时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "facilityTypeLastUpdatedTimestamp",
          "in": "query",
          "description": "设备类型信息最后一次更新时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spaceLastUpdatedTimestamp",
          "in": "query",
          "description": "位置信息最后一次更新时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "departmentLastUpdatedTimestamp",
          "in": "query",
          "description": "部门信息最后一次更新时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "woPriorityLastUpdatedTimestamp",
          "in": "query",
          "description": "工单优先级信息最后一次更新时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "woSlaLastUpdatedTimestamp",
          "in": "query",
          "description": "工单工作流程信息最后一次更新时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "serviceTypeLastUpdatedTimestamp",
          "in": "query",
          "description": "服务类型信息最后一次更新时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "demandTypeLastUpdatedTimestamp",
          "in": "query",
          "description": "需求类型信息最后一次更新时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of基础数据是否有更新，为空代表没有检测更新"
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