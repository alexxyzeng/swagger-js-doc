{
  "path": "/project",
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
            "type": "string",
            "description": "项目名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "项目组名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "项目状态: 1、未开始 2、服务中 3、预警 4、过期 {未开始=1, 服务中=2, 预警中=3, 已过期=4}",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "服务开始时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "服务结束时间",
            "enum": []
          },
          {
            "type": "number",
            "description": "授权用户数",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "使用用户数",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "项目编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "项目标识号",
            "enum": []
          },
          {
            "type": "string",
            "description": "项目业态",
            "enum": []
          }
        ]
      },
      "summary": "项目列表&搜索",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchUsingGET_3",
      "tags": [
        "base-project"
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
      "summary": "新增项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_33",
      "tags": [
        "base-project"
      ]
    }
  }
}