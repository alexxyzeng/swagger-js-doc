{
  "path": "/demand-process",
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
            "type": "number",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "租户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "需求ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "需求处理记录-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_5",
      "tags": [
        "service-center-demand-process"
      ]
    },
    "delete": {
      "parameters": {
        "body": [
          {
            "description": "idx",
            "enum": []
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除需求处理记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_2",
      "tags": [
        "service-center-demand-process"
      ]
    }
  }
}