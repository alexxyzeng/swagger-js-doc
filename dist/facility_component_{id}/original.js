{
  "path": "/facility/component/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "componentBrand": {
              "type": "string",
              "description": "组件品牌",
              "enum": []
            },
            "componentCode": {
              "type": "string",
              "description": "组件编码",
              "enum": []
            },
            "componentLife": {
              "type": "string",
              "description": "质保周期",
              "enum": []
            },
            "componentModel": {
              "type": "string",
              "description": "组件型号",
              "enum": []
            },
            "componentName": {
              "type": "string",
              "description": "组件名称",
              "enum": []
            },
            "componentUnit": {
              "type": "string",
              "description": "组件单位",
              "enum": []
            },
            "enableTime": {
              "type": "string",
              "description": "安装时间",
              "enum": []
            },
            "expireTime": {
              "type": "string",
              "description": "质保到期",
              "enum": []
            },
            "facilityId": {
              "type": "number",
              "description": "设备id",
              "required": false,
              "enum": []
            },
            "typeComponentId": {
              "type": "number",
              "description": "设备分类组件id",
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
      "summary": "修改设备组件",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_16",
      "tags": [
        "facility-component"
      ]
    }
  }
}