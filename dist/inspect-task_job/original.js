{
  "path": "/inspect-task/job",
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
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "taskId",
            "description": "巡检任务ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "site",
            "description": "点位",
            "enum": []
          },
          {
            "type": "string",
            "name": "job",
            "description": "工作任务",
            "enum": []
          },
          {
            "type": "string",
            "name": "status",
            "description": "工作任务状态 {未完成=Unfinished-1, 已完成=Complete-2}",
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
            "description": "工作任务状态 {正常=Normal-1, 异常=AbNormal-2, 漏检=Miss-3, 补检=Supplement-4, 报修=Repair-5}",
            "name": "statuses"
          }
        ]
      },
      "summary": "巡检任务-工作任务-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_37",
      "tags": [
        "inspect-task"
      ]
    }
  }
}