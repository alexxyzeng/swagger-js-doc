{
  "path": "/work-team/{workTeamId}/worker-reorder",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "workers",
            "name": "workers"
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "workTeamId",
            "description": "workTeamId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "工作组执行人重排序",
      "consumes": [
        "application/json"
      ],
      "operationId": "workersReorderUsingPUT",
      "tags": [
        "work-team"
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
}