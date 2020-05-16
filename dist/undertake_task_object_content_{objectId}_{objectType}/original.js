{
  "path": "/undertake/task/object/content/{objectId}/{objectType}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "objectId",
            "description": "objectId",
            "required": true,
            "enum": []
          },
          {
            "type": "string",
            "name": "objectType",
            "description": "objectType",
            "enum": [
              "1",
              "2"
            ]
          }
        ],
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
      "summary": "承接查验-任务-对象-查验内容-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByObjectIdUsingGET_1",
      "tags": [
        "undertake-task-object-content"
      ]
    }
  }
}