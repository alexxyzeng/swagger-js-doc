{
  "path": "/outbound",
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
      "summary": "出库单-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_45",
      "tags": [
        "inventory"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "governor": {
              "type": "number",
              "description": "主管",
              "required": false,
              "enum": []
            },
            "materials": {
              "type": "array",
              "valueType": {
                "inventoryId": {
                  "type": "number",
                  "description": "库存ID",
                  "required": false,
                  "enum": []
                },
                "materialId": {
                  "type": "number",
                  "description": "物资ID",
                  "required": false,
                  "enum": []
                },
                "outNum": {
                  "type": "number",
                  "description": "出库数量",
                  "enum": []
                },
                "shelfId": {
                  "type": "number",
                  "description": "货架ID",
                  "required": false,
                  "enum": []
                },
                "warehouseId": {
                  "type": "number",
                  "description": "仓库ID",
                  "required": false,
                  "enum": []
                }
              },
              "required": false
            },
            "recipient": {
              "type": "number",
              "description": "领用人ID",
              "required": false,
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "requisitionDate": {
              "type": "string",
              "description": "领料日期",
              "enum": []
            },
            "requisitionDepartment": {
              "type": "number",
              "description": "领料部门",
              "required": false,
              "enum": []
            },
            "storeman": {
              "type": "number",
              "description": "保管员ID",
              "required": false,
              "enum": []
            },
            "totalNum": {
              "type": "number",
              "description": "总数",
              "enum": []
            },
            "warehouseId": {
              "type": "number",
              "description": "仓库ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增出库单",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_31",
      "tags": [
        "inventory"
      ]
    }
  }
}