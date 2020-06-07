{
  "path": "/demand/type/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "typeId",
            "description": "需求类型ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "parentId",
            "description": "上级需求类型id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "typeName",
            "description": "需求名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "编码",
            "enum": []
          }
        ]
      },
      "summary": "检验需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkTypeNameUsingGET",
      "tags": [
        "service-center-demand-type"
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