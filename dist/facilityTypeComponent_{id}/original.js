{
  "path": "/facilityTypeComponent/{id}",
  "methods": {
    "put": {
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
      "summary": "修改核心组件",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_19",
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
            "name": "id",
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
      "operationId": "deleteUsingDELETE_17",
      "tags": [
        "facility-type-component"
      ]
    }
  }
}