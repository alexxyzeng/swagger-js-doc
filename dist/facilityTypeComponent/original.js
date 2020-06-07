{
  "path": "/facilityTypeComponent",
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
      "summary": "查询设施分类对应的所有核心组件",
      "consumes": [
        "application/json"
      ],
      "operationId": "queryUsingGET",
      "tags": [
        "facility-type-component"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf设施分类对应的核心组件"
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
            "componentBelongType": {
              "type": "string",
              "description": "null {上级分类的核心组件=Parent-0, 自己的核心组件=Oneself-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "componentBrand": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "componentLife": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "componentName": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "componentUnit": {
              "type": "string",
              "description": "",
              "enum": []
            },
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
            "lifeUnit": {
              "type": "string",
              "description": "null {年=Year-1, 月=Month-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "lifeUnitName": {
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
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增核心组件",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_11",
      "tags": [
        "facility-type-component"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of设施分类对应的核心组件"
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