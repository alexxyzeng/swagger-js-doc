{
  "path": "/project/demand-type-status/{demandTypeId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "demandTypeId",
            "description": "demandTypeId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "查询项目同步的需求类型的状态",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchDemandTypeStatusUsingGET",
      "tags": [
        "base-project"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf项目-需求类型信息"
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