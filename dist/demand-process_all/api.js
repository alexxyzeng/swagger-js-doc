[
  "/demand-process/all",
  {
    "get": {
      "tags": [
        "service-center-demand-process"
      ],
      "summary": "需求处理记录-列表-不分页",
      "operationId": "findUsingGET_7",
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
          "name": "demandId",
          "in": "query",
          "description": "需求ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "demandIds",
          "in": "query",
          "description": "需求ID(批量查询)",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf需求处理记录-响应"
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