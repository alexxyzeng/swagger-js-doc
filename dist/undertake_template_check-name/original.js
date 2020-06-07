{
  "path": "/undertake/template/check-name",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "templateId",
            "description": "模版id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "模版名称",
            "enum": []
          }
        ]
      },
      "summary": "承接查验模板名称唯一性校验, 名称唯一返回true",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkNameUsingGET_1",
      "tags": [
        "undertake-template"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofboolean"
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