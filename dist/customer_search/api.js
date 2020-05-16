[
  "/customer/search",
  {
    "get": {
      "tags": [
        "base-customer"
      ],
      "summary": "查询客户信息-列表",
      "operationId": "findUsingGET_1",
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
        },
        {
          "name": "customerName",
          "in": "query",
          "description": "客户姓名",
          "required": false,
          "type": "string"
        },
        {
          "name": "customerTitle",
          "in": "query",
          "description": "客户称谓",
          "required": false,
          "type": "string"
        },
        {
          "name": "mobile",
          "in": "query",
          "description": "客户手机号",
          "required": false,
          "type": "string"
        },
        {
          "name": "telephone",
          "in": "query",
          "description": "客户电话",
          "required": false,
          "type": "string"
        },
        {
          "name": "company",
          "in": "query",
          "description": "公司",
          "required": false,
          "type": "string"
        },
        {
          "name": "position",
          "in": "query",
          "description": "职位",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of客户信息"
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