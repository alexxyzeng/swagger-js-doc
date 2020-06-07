{
  "path": "/workorder/service-type/by-code/{code}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "string",
            "name": "code",
            "description": "code",
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询服务类型-byCode",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByCodeUsingGET_2",
      "tags": [
        "workorder-service-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of工单-服务类型表-响应"
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