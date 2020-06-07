{
  "path": "/inspect-template/{template-id}/all-content",
  "methods": {
    "post": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "template-id",
            "description": "template-id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "全选巡检模板-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllIdUsingPOST",
      "tags": [
        "inspect-template"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOflong"
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