{
  "path": "/inspect-site/job/facility/by_site_job",
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
            "description": "projectId",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "点位工作任务ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检点位-工作任务-设备-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllOfSiteJobUsingGET",
      "tags": [
        "inspect-site"
      ]
    }
  }
}