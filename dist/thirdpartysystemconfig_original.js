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
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
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
            "description": "排序"
          }
        ]
      },
      "summary": "第三方账户-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_58",
      "tags": [
        "thirdparty-system-config-feign"
      ]
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
      "operationId": "createUsingPOST_44",
      "tags": [
        "thirdparty-system-config-feign"
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
            "description": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除第三方账户",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_54",
      "tags": [
        "thirdparty-system-config-feign"
      ]
    }
  }
}