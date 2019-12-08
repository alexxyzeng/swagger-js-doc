{
  "path": "/inbound",
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
      "summary": "入库单-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_18",
      "tags": [
        "inventory"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "handler": {
              "type": "number",
              "description": "经手人",
              "required": false,
              "enum": []
            },
            "materials": {
              "type": "array",
              "valueType": {
                "expiredDate": {
                  "type": "string",
                  "description": "过期日期",
                  "enum": []
                },
                "inNum": {
                  "type": "number",
                  "description": "入库数量",
                  "enum": []
                },
                "isIncludeTax": {
                  "type": "string",
                  "description": "是否含税 是否枚举{否=No, 是=Yes}",
                  "enum": [
                    "0",
                    "1"
                  ]
                },
                "materialId": {
                  "type": "number",
                  "description": "物资ID",
                  "required": false,
                  "enum": []
                },
                "price": {
                  "type": "number",
                  "description": "单价",
                  "enum": []
                },
                "providerId": {
                  "type": "number",
                  "description": "供应商ID",
                  "required": false,
                  "enum": []
                },
                "shelfId": {
                  "type": "number",
                  "description": "货架ID",
                  "required": false,
                  "enum": []
                },
                "taxRate": {
                  "type": "number",
                  "description": "税率",
                  "enum": []
                }
              },
              "required": false
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "storeman": {
              "type": "number",
              "description": "保管员",
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
      "summary": "新增入库单",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_12",
      "tags": [
        "inventory"
      ]
    }
  }
}