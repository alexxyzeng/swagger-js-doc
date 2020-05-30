{
  "path": "/template/content/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "消息模版内容-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_43",
      "tags": [
        "template"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
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
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改消息模版内容-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_52",
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
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除消息模版内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_52",
      "tags": [
        "template"
      ]
    }
  }
}