{
  "path": "/employee/third/bind/{employeeId}",
  "methods": {
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
        "path": [
          {
            "type": "number",
            "name": "employeeId",
            "description": "employeeId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "绑定第三方账号",
      "consumes": [
        "application/json"
      ],
      "operationId": "thirdAccountBindUsingPOST",
      "tags": [
        "base-employee"
      ]
    }
  }
}