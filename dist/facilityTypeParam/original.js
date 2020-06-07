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
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf设施分类对应的参数"
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
                  "type": "object",
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
                "required": false,
                "description": ""
              }
            },
            "paramBelongType": {
              "type": "string",
              "description": "null {上级分类的参数=Parent-0, 自己的参数=Oneself-1}",
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
              "description": "null {文本=Text-1, 数字=Number-2, 日期=Date-3, 单选=Elect-4}",
              "enum": [
                "1",
                "2",
                "3",
                "4"
              ]
            },
            "paramUnit": {
              "type": "string",
              "description": "",
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
      "operationId": "createUsingPOST_13",
      "tags": [
        "facility-type-param"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of设施分类对应的参数"
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
    }
  }
}