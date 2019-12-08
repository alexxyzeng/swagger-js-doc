{
  "path": "/employee/export",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "string",
            "description": "姓名",
            "enum": []
          },
          {
            "type": "string",
            "description": "精确匹配账号",
            "enum": []
          },
          {
            "type": "string",
            "description": "模糊匹配账号",
            "enum": []
          },
          {
            "type": "string",
            "description": "员工编号",
            "enum": []
          },
          {
            "type": "string",
            "description": "手机号",
            "enum": []
          },
          {
            "type": "string",
            "description": "固定电话",
            "enum": []
          },
          {
            "type": "number",
            "description": "用户类型：1、员工 2、领导层 3、管理层 4、供应商 5、内置用户 {员工=1, 领导层=2, 管理层=3, 供应商=4, 内置用户=5}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "账号激活状态。0、未激活 1、已激活 {未激活=0, 已激活=1}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "岗位ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "查询主管的用户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          }
        ]
      },
      "summary": "用户列表导出",
      "consumes": [
        "application/json"
      ],
      "operationId": "exportUsingGET",
      "tags": [
        "base-employee"
      ]
    }
  }
}