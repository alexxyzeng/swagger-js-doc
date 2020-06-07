{
  "path": "/facilityType/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "typeId",
            "description": "设备分类ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "parentId",
            "description": "上级设备分类id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "设备分类名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "设备分类编码",
            "enum": []
          }
        ]
      },
      "summary": "检验设备分类",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkTypeNameUsingGET_1",
      "tags": [
        "facility-type"
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