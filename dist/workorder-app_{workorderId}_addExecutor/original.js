{
  "path": "/workorder-app/{workorderId}/addExecutor",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "employeeIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "执行人id列表"
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "workorderId",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "增派",
      "consumes": [
        "application/json"
      ],
      "operationId": "addExecutorUsingPUT",
      "tags": [
        "workorder-app"
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
}