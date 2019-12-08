{
  "path": "/template/param",
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
      "summary": "消息模版参数-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_52",
      "tags": [
        "template"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "desc": {
              "type": "string",
              "description": "参数描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "param": {
              "type": "string",
              "description": "参数",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "templateId": {
              "type": "number",
              "description": "消息模版ID",
              "required": false,
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "消息类型 {站内信=Web, 移动推送=Mobile, 短信=Msg, 邮件=Email, 公告=Bulletin}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增消息模版参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_41",
      "tags": [
        "template"
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
      "summary": "批量删除消息模版参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_54",
      "tags": [
        "template"
      ]
    }
  }
}