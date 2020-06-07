{
  "path": "/workorder/service-type/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "typeId",
            "description": "服务类型ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "parentId",
            "description": "上级服务类型id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "服务类型名称",
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
      "summary": "检验服务类型类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkTypeNameUsingGET_2",
      "tags": [
        "workorder-service-type"
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