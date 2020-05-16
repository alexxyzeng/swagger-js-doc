[
  "/message/send/station/self",
  {
    "get": {
      "tags": [
        "base-message"
      ],
      "summary": "个人站内信列表",
      "operationId": "findStationOfSelfUsingGET",
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
          "name": "type",
          "in": "query",
          "description": "消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
          "required": false,
          "type": "string"
        },
        {
          "name": "sendTimeStart",
          "in": "query",
          "description": "发送时间开始",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "sendTimeEnd",
          "in": "query",
          "description": "发送时间结束",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "content",
          "in": "query",
          "description": "消息内容",
          "required": false,
          "type": "string"
        },
        {
          "name": "isRead",
          "in": "query",
          "description": "是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        },
        {
          "name": "source",
          "in": "query",
          "description": "消息来源 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6}",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of消息发送记录-简要信息-响应"
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