{
  "path": "/pm/plan/detail",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "maintId",
            "description": "设置id",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "name": "planDate",
            "description": "计划日期",
            "enum": []
          }
        ]
      },
      "summary": "查询计划详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET",
      "tags": [
        "pm-plan"
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
}