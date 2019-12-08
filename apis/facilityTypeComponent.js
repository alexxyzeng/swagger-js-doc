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
      "summary": "查询设施分类对应的所有核心组件",
      "consumes": [
        "application/json"
      ],
      "operationId": "queryUsingGET",
      "tags": [
        "facility-type-component"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "componentBelongType": {
              "type": "string",
              "description": "null {上级分类的核心组件=Parent, 自己的核心组件=Oneself}",
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
              "type": "number",
              "description": "",
              "required": false,
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
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
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
      "operationId": "createUsingPOST_8",
      "tags": [
        "facility-type-component"
      ]
    }
  }
}