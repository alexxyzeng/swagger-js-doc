{
  "path": "/workorder-approval/search",
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
            "description": "工单编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "工单描述",
            "enum": []
          },
          {
            "type": "string",
            "description": "审批内容",
            "enum": []
          },
          {
            "type": "string",
            "description": "创建开始事件",
            "enum": []
          },
          {
            "type": "string",
            "description": "创建结束事件",
            "enum": []
          }
        ]
      },
      "summary": "查询工单审批列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_6",
      "tags": [
        "workorder-approval"
      ]
    }
  }
}