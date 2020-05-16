{
  "path": "/demand/type/ref",
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
            "description": "取增量数据用",
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
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "需求类型全称",
            "enum": []
          }
        ]
      },
      "summary": "需求类型关联-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_13",
      "tags": [
        "service-center-demand-type"
      ]
    },
    "delete": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除需求类型关联",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_9",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}