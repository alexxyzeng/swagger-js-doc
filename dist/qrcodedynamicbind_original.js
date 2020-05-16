{
  "path": "/qrcodedynamicbind",
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
          },
          {
            "type": "number",
            "description": "ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "活码绑定表-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_49",
      "tags": [
        "qrcodedynamicbind"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "bindId": {
              "type": "number",
              "description": "绑定ID",
              "required": false,
              "enum": []
            },
            "bindType": {
              "type": "string",
              "description": "绑定类型 {巡检点位=InSite-1, 设备=Fac-2, 库存=Inventory-3}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "qrcodeDynamicId": {
              "type": "number",
              "description": "活码ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增活码绑定表",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_36",
      "tags": [
        "qrcodedynamicbind"
      ]
    },
    "delete": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除活码绑定表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_39",
      "tags": [
        "qrcodedynamicbind"
      ]
    }
  }
}