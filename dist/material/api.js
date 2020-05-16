[
  "/material",
  {
    "get": {
      "tags": [
        "warehouse"
      ],
      "summary": "库存物资-列表",
      "operationId": "findUsingGET_43",
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
          "name": "code",
          "in": "query",
          "description": "物资编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "name",
          "in": "query",
          "description": "物资名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "brand",
          "in": "query",
          "description": "物资品牌",
          "required": false,
          "type": "string"
        },
        {
          "name": "model",
          "in": "query",
          "description": "物资型号",
          "required": false,
          "type": "string"
        },
        {
          "name": "unit",
          "in": "query",
          "description": "物资单位",
          "required": false,
          "type": "string"
        },
        {
          "name": "price",
          "in": "query",
          "description": "核定价格",
          "required": false,
          "type": "object"
        },
        {
          "name": "safeStock",
          "in": "query",
          "description": "安全库存",
          "required": false,
          "type": "object"
        },
        {
          "name": "remark",
          "in": "query",
          "description": "备注",
          "required": false,
          "type": "string"
        },
        {
          "name": "hybrid",
          "in": "query",
          "description": "编码或名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "warehouseId",
          "in": "query",
          "description": "仓库ID,查询是否有库存时使用",
          "required": false,
          "type": "integer",
          "format": "int64"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of库存物资-响应"
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
    },
    "post": {
      "tags": [
        "warehouse"
      ],
      "summary": "新增库存物资",
      "operationId": "createUsingPOST_29",
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
          "in": "body",
          "name": "dto",
          "description": "dto",
          "required": true,
          "schema": {
            "$ref": "#/definitions/库存物资"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of库存物资-响应"
          }
        },
        "201": {
          "description": "Created"
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
    },
    "put": {
      "tags": [
        "warehouse"
      ],
      "summary": "批量删除库存物资",
      "operationId": "deleteUsingPUT_11",
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
          "in": "body",
          "name": "idx",
          "description": "idx",
          "required": true,
          "schema": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            }
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "201": {
          "description": "Created"
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