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
      "operationId": "findUsingGET_56",
      "tags": [
        "template"
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
            "content": {
              "annex": {
                "type": "string",
                "description": "附件",
                "enum": []
              },
              "contentCn": {
                "type": "string",
                "description": "中文内容",
                "enum": []
              },
              "contentEn": {
                "type": "string",
                "description": "英文内容",
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
              "templateId": {
                "type": "number",
                "description": "消息模版ID",
                "required": false,
                "enum": []
              },
              "titleCn": {
                "type": "string",
                "description": "中文标题",
                "enum": []
              },
              "titleEn": {
                "type": "string",
                "description": "英文标题",
                "enum": []
              },
              "type": {
                "type": "string",
                "description": "内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
                "enum": [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5"
                ]
              }
            },
            "depict": {
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
            "params": {
              "type": "array",
              "valueType": {
                "type": {
                  "type": "string",
                  "description": "消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
                  "enum": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ]
                },
                "depict": {
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
                }
              },
              "required": false,
              "description": ""
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
      "operationId": "createUsingPOST_42",
      "tags": [
        "template"
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
      "summary": "批量删除消息模版",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_50",
      "tags": [
        "template"
      ]
    }
  }
}