{
  "path": "/template/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "消息模版-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_41",
      "tags": [
        "template"
      ]
    },
    "put": {
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
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改消息模版-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_51",
      "tags": [
        "template"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除消息模版",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_49",
      "tags": [
        "template"
      ]
    }
  }
}