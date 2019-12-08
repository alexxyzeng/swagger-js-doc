{
  "path": "/inspect-template/{template-id}/content",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "内容",
              "enum": []
            },
            "defaultVal": {
              "type": "string",
              "description": "默认值",
              "enum": []
            },
            "exceptions": {
              "exceptions": {
                "type": "array",
                "valueType": {
                  "type": "string",
                  "description": "",
                  "enum": []
                },
                "required": false
              }
            },
            "model": {
              "type": "string",
              "description": "模式：1-不限 2-夏季 3-冬季 {常规=Normal, 夏季=Summer, 冬季=Winter}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "options": {
              "inputRange": {
                "ceiling": {
                  "type": "number",
                  "description": "上限",
                  "enum": []
                },
                "lower": {
                  "type": "number",
                  "description": "下限",
                  "enum": []
                }
              },
              "options": {
                "type": "array",
                "valueType": {
                  "isRight": {
                    "type": "boolean",
                    "description": "选项是否正确",
                    "enum": []
                  },
                  "option": {
                    "type": "string",
                    "description": "选项值",
                    "enum": []
                  }
                },
                "required": false
              }
            },
            "runStatus": {
              "type": "string",
              "description": "运行状态：1-不限 2-在线 3-停用 {不限=Unlimit, 在线=Online, 停用=Stop}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "sort": {
              "type": "number",
              "description": "顺序",
              "required": false,
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "类型：1-输入 2-选择 {输入=Input, 选择=Select}",
              "enum": [
                "1",
                "2"
              ]
            },
            "unit": {
              "type": "number",
              "description": "单位",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "template-id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增巡检模板-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_24",
      "tags": [
        "inspect-template"
      ]
    }
  }
}