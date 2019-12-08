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
      "operationId": "findByIdUsingGET_38",
      "tags": [
        "base-template"
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
      "operationId": "updateUsingPUT_50",
      "tags": [
        "base-template"
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
      "operationId": "deleteUsingDELETE_53",
      "tags": [
        "base-template"
      ]
    }
  }
}