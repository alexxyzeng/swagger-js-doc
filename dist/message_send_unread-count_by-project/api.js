[
  "/message/send/unread-count/by-project",
  {
    "get": {
      "tags": [
        "base-message"
      ],
      "summary": "未读站内信数-项目",
      "operationId": "unreadCountByProjectIdUsingGET",
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
          "name": "employeeId",
          "in": "query",
          "description": "员工id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "type",
          "in": "query",
          "description": "消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
          "required": false,
          "type": "string"
        },
        {
          "name": "isRead",
          "in": "query",
          "description": "是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofint"
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