[
  "/workorder/{id}/accept",
  {
    "put": {
      "tags": [
        "workorder"
      ],
      "summary": "接单",
      "operationId": "acceptUsingPUT",
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
          "in": "path",
          "description": "id",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "woExecEmployeeId",
          "in": "query",
          "description": "工单执行人主键ID",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "execEmployeeId",
          "in": "query",
          "description": "工单执行人ID",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "execEmployeeName",
          "in": "query",
          "description": "工单执行人名称",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单详情"
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