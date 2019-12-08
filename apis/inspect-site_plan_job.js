{
  "path": "/inspect-site/plan/job",
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
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "点位ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "大厦ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "楼层ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "空间ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "安装位置",
            "enum": []
          },
          {
            "type": "string",
            "description": "点位名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "工作任务",
            "enum": []
          }
        ]
      },
      "summary": "巡检点位-工作任务-计划添加列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findForPlanUsingGET",
      "tags": [
        "inspect-site"
      ]
    }
  }
}