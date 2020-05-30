{
  "path": "/template/content",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
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
          },
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "消息模版内容-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_59",
      "tags": [
        "template"
      ]
    },
    "post": {
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
        "path": [],
        "query": []
      },
      "summary": "新增消息模版内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_45",
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
            "description": "idx",
            "name": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除消息模版内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_51",
      "tags": [
        "template"
      ]
    }
  }
}