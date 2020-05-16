{
  "path": "/thirdpartysystemconfig/{id}",
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
      "summary": "第三方账户-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_43",
      "tags": [
        "thirdparty-system-config-feign"
      ]
    },
    "put": {
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
      "summary": "修改第三方账户-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_53",
      "tags": [
        "thirdparty-system-config-feign"
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
      "summary": "删除第三方账户",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_53",
      "tags": [
        "thirdparty-system-config-feign"
      ]
    }
  }
}