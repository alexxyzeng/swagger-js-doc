{
  "path": "/inspect-task/exec",
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
            "description": "巡检人员ID",
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
            "type": "string",
            "description": "巡检任务状态 {未完成=Unfinished-1, 已完成=Complete-2}",
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
            "required": false,
            "description": "巡检人员工作组ID"
          }
        ]
      },
      "summary": "巡检待完成任务-查询列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findExecUsingGET",
      "tags": [
        "inspect-task"
      ]
    }
  }
}