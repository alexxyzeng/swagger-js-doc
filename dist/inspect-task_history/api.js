[
  "/inspect-task/history",
  {
    "get": {
      "tags": [
        "inspect-task"
      ],
      "summary": "巡检任务-历史列表",
      "operationId": "historyUsingGET",
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
          "name": "userId",
          "in": "query",
          "description": "用户ID",
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
          "name": "name",
          "in": "query",
          "description": "巡检名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "workTeamId",
          "in": "query",
          "description": "巡检人员id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "workTeam",
          "in": "query",
          "description": "巡检人员",
          "required": false,
          "type": "string"
        },
        {
          "name": "siteNum",
          "in": "query",
          "description": "点位数",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "exceptionNum",
          "in": "query",
          "description": "异常数",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "repairNum",
          "in": "query",
          "description": "报修数",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "missNum",
          "in": "query",
          "description": "漏检数",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "patchNum",
          "in": "query",
          "description": "补检数",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "beginDateStart",
          "in": "query",
          "description": "计划开始时间开始",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "beginDateFinish",
          "in": "query",
          "description": "计划开始时间结束",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "endDateStart",
          "in": "query",
          "description": "计划结束时间开始",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "endDateFinish",
          "in": "query",
          "description": "计划结束时间结束",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "status",
          "in": "query",
          "description": "任务状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "siteStatus",
          "in": "query",
          "description": "点位状态 1-正常 2-异常 3-漏检 4-补检 5-报修 {正常=Normal-1, 异常=AbNormal-2, 漏检=Miss-3, 补检=Supplement-4, 报修=Repair-5}",
          "required": false,
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "beginMonth",
          "in": "query",
          "description": "开始时间",
          "required": false,
          "type": "string"
        },
        {
          "name": "realityBeginDateStart",
          "in": "query",
          "description": "计划开始时间开始",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "realityBeginDateEnd",
          "in": "query",
          "description": "计划开始时间结束",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "realityEndDateStart",
          "in": "query",
          "description": "计划结束时间开始",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "realityEndDateEnd",
          "in": "query",
          "description": "计划结束时间结束",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "beginDateLimit",
          "in": "query",
          "description": "beginDateLimit",
          "required": false,
          "type": "string",
          "format": "date-time"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of巡检任务-响应"
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