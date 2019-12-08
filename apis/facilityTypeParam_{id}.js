{
  "path": "/facilityTypeParam/{id}",
  "methods": {
    "put": {
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
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改设施分类对应的参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_18",
      "tags": [
        "facility-type-param"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "根据参数id删除参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_15",
      "tags": [
        "facility-type-param"
      ]
    }
  }
}