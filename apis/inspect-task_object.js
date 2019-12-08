{
  "path": "/inspect-task/object",
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
            "description": "巡检任务-工作任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "巡检任务类型 {综合巡检=1, 设备巡检=2}",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-对象-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_34",
      "tags": [
        "inspect-task"
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
      "summary": "批量删除巡检任务-对象",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_9",
      "tags": [
        "inspect-task"
      ]
    }
  }
}