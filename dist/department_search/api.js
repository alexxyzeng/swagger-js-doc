[
  "/department/search",
  {
    "get": {
      "tags": [
        "base-org-department"
      ],
      "summary": "查找部门列表",
      "operationId": "searchUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "pathName",
          "in": "query",
          "description": "层级名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "isPMC",
          "in": "query",
          "description": "查询物业公司 1-仅查询物业公司",
          "required": false,
          "type": "integer",
          "format": "int32"
        }
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
]