[
  "/undertake/app/statistics",
  {
    "get": {
      "tags": [
        "undertake-app"
      ],
      "summary": "承接查验待处理数量统计",
      "operationId": "statisticsUsingGET_1",
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
          "description": "types",
          "required": false,
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "1",
              "2"
            ]
          },
          "collectionFormat": "multi",
          "enum": [
            "1",
            "2"
          ]
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf承接查验任务统计数据"
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