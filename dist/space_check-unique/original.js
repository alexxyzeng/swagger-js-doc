{
  "path": "/space/check-unique",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "spFloorId",
            "description": "楼层ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "displayName",
            "description": "名称",
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
      "summary": "检查空间名称或编码是否重复",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkUniqueUsingGET_2",
      "tags": [
        "base-building-space"
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