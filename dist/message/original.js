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
      "summary": "消息表-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_47",
      "tags": [
        "base-message"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of消息表-响应"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
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
              "description": "消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
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
        "path": [],
        "query": []
      },
      "summary": "新增消息表",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_32",
      "tags": [
        "base-message"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of消息表-响应"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
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
      "summary": "批量删除消息表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_36",
      "tags": [
        "base-message"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  }
}