{
  "path": "/message",
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
      "summary": "消息表-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_43",
      "tags": [
        "base-message"
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
              "description": "消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand, 工单=Workorder, 预防性维护=PM, 巡检=Inspect, 库存=Stock}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
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
              "description": "消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web, 移动推送=Mobile, 短信=Msg, 邮件=Email, 公告=Bulletin}",
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
      "summary": "新增消息表",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_29",
      "tags": [
        "base-message"
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
      "summary": "批量删除消息表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_38",
      "tags": [
        "base-message"
      ]
    }
  }
}