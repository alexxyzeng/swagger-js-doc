{
  "path": "/undertake/template",
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
            "description": "模版id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "模版名称",
            "enum": []
          }
        ]
      },
      "summary": "承接查验模板-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_61",
      "tags": [
        "undertake-template"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "contents": {
              "type": "array",
              "valueType": {
                "type": {
                  "type": "string",
                  "description": "类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}",
                  "enum": [
                    "1",
                    "2"
                  ]
                },
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
                "id": {
                  "type": "number",
                  "description": "查验内容id，更新时将原id传回服务端",
                  "required": false,
                  "enum": []
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
                      "type": "object",
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
                    "required": false,
                    "description": "选项列表"
                  }
                },
                "unit": {
                  "type": "string",
                  "description": "单位",
                  "enum": []
                }
              },
              "required": false,
              "description": "查验内容"
            },
            "name": {
              "type": "string",
              "description": "模板名称",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增承接查验模板",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_46",
      "tags": [
        "undertake-template"
      ]
    }
  }
}