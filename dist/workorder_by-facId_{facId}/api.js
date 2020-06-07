[
  "/workorder/by-facId/{facId}",
  {
    "get": {
      "tags": [
        "workorder"
      ],
      "summary": "查询设备关联工单",
      "operationId": "searchByFaIdUsingGET",
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
          "name": "facId",
          "in": "path",
          "description": "facId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "woTypes",
          "in": "query",
          "description": "woTypes",
          "required": true,
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "1",
              "2",
              "3",
              "4"
            ]
          },
          "collectionFormat": "multi",
          "enum": [
            "1",
            "2",
            "3",
            "4"
          ]
        },
        {
          "name": "pageNumber",
          "in": "query",
          "description": "获取当前页",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "pageSize",
          "in": "query",
          "description": "每页显示的数量",
          "required": false,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "pageSort",
          "in": "query",
          "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of设备维保维修记录响应"
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