{
  "path": "/department/search",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "pathName",
            "description": "层级名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "isPMC",
            "description": "查询物业公司 1-仅查询物业公司",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查找部门列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET",
      "tags": [
        "base-org-department"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfCollectionOf部门列表响应信息-树结构"
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