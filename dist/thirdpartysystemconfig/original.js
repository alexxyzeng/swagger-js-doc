{
  "path": "/thirdpartysystemconfig",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageNumber",
            "description": "当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页条数",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "排序",
            "name": "pageSort"
          }
        ]
      },
      "summary": "第三方账户-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_62",
      "tags": [
        "thirdparty-system-config-feign"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of分页响应体Of第三方账户-响应"
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
            "appId": {
              "type": "number",
              "description": "应用ID，做数据隔离用",
              "required": false,
              "enum": []
            },
            "bizId": {
              "type": "number",
              "description": "业务ID，做数据隔离用",
              "required": false,
              "enum": []
            },
            "code": {
              "type": "string",
              "description": "枚举值大写字母  DINGTALK WECHAT YISHITONG",
              "enum": []
            },
            "config": {
              "type": "string",
              "description": "第三方信息",
              "enum": []
            },
            "displayname": {
              "type": "string",
              "description": "中文描述 钉钉 微信 一事通",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "status": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增第三方账户",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_48",
      "tags": [
        "thirdparty-system-config-feign"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of第三方账户-响应"
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
      "summary": "批量删除第三方账户",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_58",
      "tags": [
        "thirdparty-system-config-feign"
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