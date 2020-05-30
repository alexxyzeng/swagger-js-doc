{
  "path": "/project-group",
  "methods": {
    "get": {
      "parameters": {
        "body": [
          null
        ],
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
          }
        ]
      },
      "summary": "项目组列表&搜索",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_4",
      "tags": [
        "base-project-group"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "description": {
              "type": "string",
              "description": "项目组描述",
              "enum": []
            },
            "projectGroupName": {
              "type": "string",
              "description": "项目组名称",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增项目组",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_38",
      "tags": [
        "base-project-group"
      ]
    }
  }
}