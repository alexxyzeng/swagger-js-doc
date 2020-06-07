{
  "path": "/workorder/sla/batch-match",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "description": "",
              "enum": []
            },
            "required": true,
            "description": "dto",
            "name": "dto"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量匹配sla",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchMatchUsingPOST",
      "tags": [
        "workorder-sla"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单-sla匹配-响应"
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