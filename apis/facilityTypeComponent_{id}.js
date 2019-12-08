{
  "path": "/facilityTypeComponent/{id}",
  "methods": {
    "put": {
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
      "summary": "修改核心组件",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_16",
      "tags": [
        "facility-type-component"
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
      "summary": "根据核心组件id删除参数",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_13",
      "tags": [
        "facility-type-component"
      ]
    }
  }
}