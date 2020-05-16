{
  "path": "/message/{id}",
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
      "summary": "消息表-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_33",
      "tags": [
        "base-message"
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
            "bizId": {
              "type": "number",
              "description": "业务ID",
              "required": false,
              "enum": []
            },
            "bizTable": {
              "type": "string",
              "description": "业务相关表名",
              "enum": []
            },
            "content": {
              "type": "string",
              "description": "消息内容",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "source": {
              "type": "string",
              "description": "消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
              ]
            },
            "templateId": {
              "type": "number",
              "description": "模版id",
              "required": false,
              "enum": []
            },
            "title": {
              "type": "string",
              "description": "消息标题",
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
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
      "summary": "修改消息表-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_41",
      "tags": [
        "base-message"
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
      "summary": "删除消息表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_33",
      "tags": [
        "base-message"
      ]
    }
  }
}