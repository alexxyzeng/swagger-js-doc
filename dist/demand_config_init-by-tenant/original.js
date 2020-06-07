{
  "path": "/demand/config/init-by-tenant",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "初始化需求配置-根据租户",
      "consumes": [
        "application/json"
      ],
      "operationId": "initByTenantUsingPUT",
      "tags": [
        "service-center-demand-config"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of需求配置-响应"
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