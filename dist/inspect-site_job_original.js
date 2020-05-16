{
  "path": "/inspect-site/job",
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
            "description": "ID",
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
            "type": "string",
            "description": "工作任务",
            "enum": []
          },
          {
            "type": "string",
            "description": "内容描述",
            "enum": []
          }
        ]
      },
      "summary": "巡检点位-工作任务-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_28",
      "tags": [
        "inspect-site"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "intro": {
              "type": "string",
              "description": "内容介绍",
              "enum": []
            },
            "job": {
              "type": "string",
              "description": "工作任务",
              "enum": []
            },
            "siteId": {
              "type": "number",
              "description": "点位ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检点位-工作任务",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_20",
      "tags": [
        "inspect-site"
      ]
    }
  }
}