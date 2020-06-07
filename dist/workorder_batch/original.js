{
  "path": "/workorder/batch",
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
            "description": "workorderDtos",
            "name": "workorderDtos"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "创建工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchCreateUsingPOST",
      "tags": [
        "workorder"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单表-响应"
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