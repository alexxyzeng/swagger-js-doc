{
  "path": "/project/list/supplier",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "供应商id/物业点id，更新时时传入",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "projectName",
            "description": "项目名称",
            "enum": []
          }
        ]
      },
      "summary": "供应商关联项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "findBySupplierUsingGET",
      "tags": [
        "base-project"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf物业点项目详情-响应"
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