{
  "path": "/inspect-task/handle",
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
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "巡检任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}",
            "enum": []
          },
          {
            "type": "number",
            "description": "设备ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "巡检任务-工作任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "巡检任务-工作对象ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "巡检任务内容ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-处理记录-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_38",
      "tags": [
        "inspect-task"
      ]
    }
  }
}