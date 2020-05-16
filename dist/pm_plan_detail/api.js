[
  "/pm/plan/detail",
  {
    "get": {
      "tags": [
        "pm-plan"
      ],
      "summary": "查询计划详情",
      "operationId": "detailUsingGET",
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
          "name": "maintId",
          "in": "query",
          "description": "设置id",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "planDate",
          "in": "query",
          "description": "计划日期",
          "required": true,
          "type": "string",
          "format": "date"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of维保计划-响应"
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