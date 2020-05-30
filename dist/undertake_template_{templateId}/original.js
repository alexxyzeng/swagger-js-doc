{
  "path": "/undertake/template/{templateId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "templateId",
            "description": "templateId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "承接查验模板-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET_4",
      "tags": [
        "undertake-template"
      ]
    },
    "put": {
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
        "path": [
          {
            "type": "number",
            "name": "templateId",
            "description": "templateId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改承接查验模板-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_57",
      "tags": [
        "undertake-template"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "templateId",
            "description": "templateId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除承接查验模板",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_59",
      "tags": [
        "undertake-template"
      ]
    }
  }
}