{
  "path": "/template",
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
          }
        ]
      },
      "summary": "消息模版-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_51",
      "tags": [
        "base-template"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "code": {
              "type": "string",
              "description": "消息模版编码",
              "enum": []
            },
            "desc": {
              "type": "string",
              "description": "消息模版描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "排序",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增消息模版",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_40",
      "tags": [
        "base-template"
      ]
    },
    "delete": {
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
      "summary": "批量删除消息模版",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_52",
      "tags": [
        "base-template"
      ]
    }
  }
}