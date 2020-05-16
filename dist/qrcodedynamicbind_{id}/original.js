{
  "path": "/qrcodedynamicbind/{id}",
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
      "summary": "活码绑定表-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_37",
      "tags": [
        "qrcodedynamicbind"
      ]
    },
    "put": {
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
      "summary": "修改活码绑定表-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_45",
      "tags": [
        "qrcodedynamicbind"
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
      "summary": "删除活码绑定表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_40",
      "tags": [
        "qrcodedynamicbind"
      ]
    }
  }
}