{
  "path": "/workorder-detail/app/{workorderId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
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
      "summary": "工单详情-app",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailOfAppUsingGET",
      "tags": [
        "workorder-app",
        "workorder-detail"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单详情-APP"
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