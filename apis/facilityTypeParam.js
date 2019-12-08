{
  "path": "/facilityTypeParam",
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
          }
        ]
      },
      "summary": "查询设施分类对应的所有参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "queryUsingGET_1",
      "tags": [
        "facility-type-param"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "extend": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "optionContent": {
              "options": {
                "type": "array",
                "valueType": {
                  "key": {
                    "type": "string",
                    "description": "key",
                    "enum": []
                  },
                  "selected": {
                    "type": "boolean",
                    "description": "是否选中",
                    "enum": []
                  },
                  "value": {
                    "type": "string",
                    "description": "值",
                    "enum": []
                  }
                },
                "required": false
              }
            },
            "paramBelongType": {
              "type": "string",
              "description": "null {上级分类的参数=Parent, 自己的参数=Oneself}",
              "enum": [
                "0",
                "1"
              ]
            },
            "paramDefault": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "paramDesc": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "paramName": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "paramType": {
              "type": "string",
              "description": "null {文本=Text, 数字=Number, 日期=Date, 单选=Elect}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            },
            "paramUnit": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "typeId": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "unitName": {
              "type": "string",
              "description": "",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增设施分类对应的参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_10",
      "tags": [
        "facility-type-param"
      ]
    }
  }
}