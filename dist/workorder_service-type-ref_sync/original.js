{
  "path": "/workorder/service-type-ref/sync",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "typeIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "同步的服务类型id，为空则全部删除"
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "同步服务类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "syncServiceTypeUsingPUT",
      "tags": [
        "workorder-service-type-ref"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单-服务类型-关联表"
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