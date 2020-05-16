{
  "path": "/workorder/sla/search",
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
            "description": "服务类型全称",
            "enum": []
          },
          {
            "type": "string",
            "description": "位置名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "部门名称",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}"
          },
          {
            "type": "string",
            "description": "优先级名称",
            "enum": []
          }
        ]
      },
      "summary": "查询sla列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_51",
      "tags": [
        "workorder-sla"
      ]
    }
  }
}