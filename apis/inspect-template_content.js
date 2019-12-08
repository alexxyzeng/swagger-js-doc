{
  "path": "/inspect-template/content",
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
            "description": "模板ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "内容",
            "enum": []
          },
          {
            "type": "number",
            "description": "模式：1-不限 2-夏季 3-冬季 {常规=1, 夏季=2, 冬季=3}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "类型：1-输入 2-选择 {输入=1, 选择=2}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "运行状态：1-不限 2-在线 3-停用 {不限=1, 在线=2, 停用=3}",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检模板-内容-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_38",
      "tags": [
        "inspect-template"
      ]
    },
    "put": {
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
      "summary": "批量删除巡检模板-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_13",
      "tags": [
        "inspect-template"
      ]
    }
  }
}