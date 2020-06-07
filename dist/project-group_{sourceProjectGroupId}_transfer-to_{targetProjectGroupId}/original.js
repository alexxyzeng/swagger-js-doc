{
  "path": "/project-group/{sourceProjectGroupId}/transfer-to/{targetProjectGroupId}",
  "methods": {
    "post": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "sourceProjectGroupId",
            "description": "sourceProjectGroupId",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "name": "targetProjectGroupId",
            "description": "targetProjectGroupId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "转移项目组内项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "transferProjectsUsingPOST",
      "tags": [
        "base-project-group"
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