{
  "path": "/message/send/{id}",
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
      "summary": "消息发送记录-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_36",
      "tags": [
        "base-message"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of消息发送记录-响应"
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
    "put": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "isRead": {
              "type": "string",
              "description": "是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "messageId": {
              "type": "number",
              "description": "消息id",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "receiver": {
              "type": "number",
              "description": "接收人ID",
              "required": false,
              "enum": []
            },
            "sendRetry": {
              "type": "number",
              "description": "发送次数",
              "required": false,
              "enum": []
            },
            "sendStatus": {
              "type": "string",
              "description": "发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "sendTime": {
              "type": "string",
              "description": "发送时间",
              "enum": []
            },
            "sender": {
              "type": "number",
              "description": "发送人ID",
              "required": false,
              "enum": []
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
      "summary": "修改消息发送记录-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_44",
      "tags": [
        "base-message"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of消息发送记录-响应"
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
      "summary": "删除消息发送记录",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_38",
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