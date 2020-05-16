[
  "/data/import/task",
  {
    "get": {
      "tags": [
        "base-data-import"
      ],
      "summary": "批量任务列表",
      "operationId": "listUsingGET",
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
          "name": "taskName",
          "in": "query",
          "description": "文档名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "lastUpdateTime",
          "in": "query",
          "description": "更新时间",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "lastUpdateStartTime",
          "in": "query",
          "description": "更新起始时间",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "lastUpdateEndTime",
          "in": "query",
          "description": "更新结束时间",
          "required": false,
          "type": "string",
          "format": "date-time"
        },
        {
          "name": "lastOperator",
          "in": "query",
          "description": "操作人",
          "required": false,
          "type": "string"
        },
        {
          "name": "lastImportStatus",
          "in": "query",
          "description": "导入结果 {成功=Success-1, 部分失败=PartialFail-2, 处理中=Processing-3}",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf批量导入任务"
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