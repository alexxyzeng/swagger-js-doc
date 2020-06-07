[
  "/work-team/{workTeamId}/worker/{workTeamMemberId}",
  {
    "delete": {
      "tags": [
        "work-team"
      ],
      "summary": "删除工作组执行人",
      "operationId": "deleteWorkerUsingDELETE",
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
          "in": "path",
          "description": "workTeamId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "workTeamMemberId",
          "in": "path",
          "description": "workTeamMemberId",
          "required": true,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  }
]