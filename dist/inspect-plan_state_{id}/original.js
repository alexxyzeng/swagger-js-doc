{
  "path": "/inspect-plan/state/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "status": {
              "type": "string",
              "description": "状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}",
              "enum": [
                "1",
                "2"
              ]
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "巡检计划-激活/失效",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateStateUsingPUT",
      "tags": [
        "inspect-plan"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofint"
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
}