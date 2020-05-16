{
  "path": "/customer/search",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "string",
            "name": "customerName",
            "description": "客户姓名",
            "enum": []
          },
          {
            "type": "string",
            "name": "customerTitle",
            "description": "客户称谓",
            "enum": []
          },
          {
            "type": "string",
            "name": "mobile",
            "description": "客户手机号",
            "enum": []
          },
          {
            "type": "string",
            "name": "telephone",
            "description": "客户电话",
            "enum": []
          },
          {
            "type": "string",
            "name": "company",
            "description": "公司",
            "enum": []
          },
          {
            "type": "string",
            "name": "position",
            "description": "职位",
            "enum": []
          }
        ]
      },
      "summary": "查询客户信息-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_1",
      "tags": [
        "base-customer"
      ]
    }
  }
}