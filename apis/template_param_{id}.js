{
  "path": "/template/param/{id}",
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
      "summary": "消息模版参数-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_39",
      "tags": [
        "template"
      ]
    },
    "put": {
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
      "summary": "修改消息模版参数-部分",
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
      "summary": "删除消息模版参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_55",
      "tags": [
        "template"
      ]
    }
  }
}