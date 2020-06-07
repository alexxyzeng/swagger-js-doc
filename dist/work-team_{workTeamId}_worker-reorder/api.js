[
  "/work-team/{workTeamId}/worker-reorder",
  {
    "put": {
      "tags": [
        "work-team"
      ],
      "summary": "工作组执行人重排序",
      "operationId": "workersReorderUsingPUT",
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
          "in": "body",
          "name": "workers",
          "description": "workers",
          "required": true,
          "schema": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            }
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工作组成员信息"
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