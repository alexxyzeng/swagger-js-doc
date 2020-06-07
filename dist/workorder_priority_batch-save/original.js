{
  "path": "/workorder/priority/batch-save",
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
            "description": "priorityDtos",
            "name": "priorityDtos"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "优先级信息批量保存",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchSaveUsingPOST",
      "tags": [
        "workorder-priority"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单-优先级表-响应"
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