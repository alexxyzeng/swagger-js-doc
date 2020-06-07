{
  "path": "/workorder/{id}/batch-transfer",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "description": "",
              "enum": []
            },
            "required": true,
            "description": "dtos",
            "name": "dtos"
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
      "summary": "转单-生成多个工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchTransferUsingPUT",
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