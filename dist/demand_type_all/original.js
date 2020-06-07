{
  "path": "/demand/type/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "tenantId",
            "description": "租户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "typeName",
            "description": "类型名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "eqTypeName",
            "description": "类型名称-eq",
            "enum": []
          },
          {
            "type": "string",
            "name": "pathName",
            "description": "全称",
            "enum": []
          }
        ]
      },
      "summary": "需求类型-全部",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_10",
      "tags": [
        "service-center-demand-type"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf需求类型-响应"
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