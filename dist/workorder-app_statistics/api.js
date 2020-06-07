[
  "/workorder-app/statistics",
  {
    "get": {
      "tags": [
        "workorder-app"
      ],
      "summary": "工单待处理数量统计",
      "operationId": "statisticsUsingGET_2",
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
          "name": "types",
          "in": "query",
          "description": "工单统计类型 {抢单=Scramble-1, 派工=Dispatch-2, 处理=Process-3, 审批=Approval-4, 待验证或存档=CheckArchive-5, 我的报单=MyReport-6, 待转单=Transfer-7, 待完成=Pending-8, 待验证=Check-9, 待存档=Archive-10}",
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
            "$ref": "#/definitions/统一响应体OfListOf工单统计数据"
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