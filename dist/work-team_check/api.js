[
  "/work-team/check",
  {
    "get": {
      "tags": [
        "work-team"
      ],
      "summary": "检验工作组",
      "operationId": "checkTypeNameUsingGET_3",
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
          "name": "workTeamId",
          "in": "query",
          "description": "工作组id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "parentId",
          "in": "query",
          "description": "上级工作组id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "name",
          "in": "query",
          "description": "工作组名称",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofboolean"
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