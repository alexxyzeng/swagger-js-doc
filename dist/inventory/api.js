[
  "/inventory",
  {
    "get": {
      "tags": [
        "inventory"
      ],
      "summary": "库存-列表",
      "operationId": "findUsingGET_44",
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
          "name": "warehouseName",
          "in": "query",
          "description": "仓库名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "warehouseId",
          "in": "query",
          "description": "仓库ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "shelfName",
          "in": "query",
          "description": "货架名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "materialCode",
          "in": "query",
          "description": "物资编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "materialName",
          "in": "query",
          "description": "物资名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "materialBrand",
          "in": "query",
          "description": "物资品牌",
          "required": false,
          "type": "string"
        },
        {
          "name": "materialModel",
          "in": "query",
          "description": "物资型号",
          "required": false,
          "type": "string"
        },
        {
          "name": "materialUnit",
          "in": "query",
          "description": "物资单位",
          "required": false,
          "type": "string"
        },
        {
          "name": "materialPrice",
          "in": "query",
          "description": "物资价格",
          "required": false,
          "type": "object"
        },
        {
          "name": "paperNum",
          "in": "query",
          "description": "账面数量",
          "required": false,
          "type": "object"
        },
        {
          "name": "lockNum",
          "in": "query",
          "description": "锁定数量",
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
          "name": "usableNum",
          "in": "query",
          "description": "可用库存",
          "required": false,
          "type": "object"
        },
        {
          "name": "storageType",
          "in": "query",
          "description": "库存量 1-充足 2-紧缺 {充足=Enough-1, 紧缺=Lack-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "hybrid",
          "in": "query",
          "description": "物资编码或名称",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of库存-响应"
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