[
  "/project-group/{sourceProjectGroupId}/transfer-to/{targetProjectGroupId}",
  {
    "post": {
      "tags": [
        "base-project-group"
      ],
      "summary": "转移项目组内项目",
      "operationId": "transferProjectsUsingPOST",
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
          "name": "sourceProjectGroupId",
          "in": "path",
          "description": "sourceProjectGroupId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "targetProjectGroupId",
          "in": "path",
          "description": "targetProjectGroupId",
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