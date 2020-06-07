{
  "path": "/inspect-template/content/{id}",
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
      "summary": "巡检模板-内容-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_30",
      "tags": [
        "inspect-template"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检模板-内容-响应"
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
    "put": {
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
                "required": false,
                "description": "异常列表"
              }
            },
            "model": {
              "type": "string",
              "description": "模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}",
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
                "description": ""
              }
            },
            "runStatus": {
              "type": "string",
              "description": "运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}",
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
              "description": "类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "unit": {
              "type": "string",
              "description": "单位",
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
      "summary": "修改巡检模板-内容-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_38",
      "tags": [
        "inspect-template"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of巡检模板-内容-响应"
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
      "summary": "删除巡检模板-内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_30",
      "tags": [
        "inspect-template"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofboolean"
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