{
  "path": "/customer",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "addressList": {
              "type": "array",
              "valueType": {
                "type": "object",
                "id": {
                  "type": "number",
                  "description": "客户地址id",
                  "required": false,
                  "enum": []
                },
                "spBuildingId": {
                  "type": "number",
                  "description": "大楼ID",
                  "required": false,
                  "enum": []
                },
                "spBuildingName": {
                  "type": "string",
                  "description": "大楼名称",
                  "enum": []
                },
                "spFloorId": {
                  "type": "number",
                  "description": "楼层ID",
                  "required": false,
                  "enum": []
                },
                "spFloorName": {
                  "type": "string",
                  "description": "楼层名称",
                  "enum": []
                },
                "spSpaceId": {
                  "type": "number",
                  "description": "空间ID",
                  "required": false,
                  "enum": []
                },
                "spSpaceName": {
                  "type": "string",
                  "description": "空间名称",
                  "enum": []
                }
              },
              "required": false,
              "description": "位置信息"
            },
            "company": {
              "type": "string",
              "description": "公司",
              "enum": []
            },
            "customerName": {
              "type": "string",
              "description": "客户姓名",
              "enum": []
            },
            "customerTitle": {
              "type": "string",
              "description": "客户称谓",
              "enum": []
            },
            "department": {
              "type": "string",
              "description": "部门",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "email": {
              "type": "string",
              "description": "客户邮箱",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "客户id",
              "required": false,
              "enum": []
            },
            "mobile": {
              "type": "string",
              "description": "客户手机号",
              "enum": []
            },
            "position": {
              "type": "string",
              "description": "职位",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "qq": {
              "type": "string",
              "description": "QQ",
              "enum": []
            },
            "telephone": {
              "type": "string",
              "description": "客户电话",
              "enum": []
            },
            "wechat": {
              "type": "string",
              "description": "微信",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增客户",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_1",
      "tags": [
        "base-customer"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "addressList": {
              "type": "array",
              "valueType": {
                "type": "object",
                "id": {
                  "type": "number",
                  "description": "客户地址id",
                  "required": false,
                  "enum": []
                },
                "spBuildingId": {
                  "type": "number",
                  "description": "大楼ID",
                  "required": false,
                  "enum": []
                },
                "spBuildingName": {
                  "type": "string",
                  "description": "大楼名称",
                  "enum": []
                },
                "spFloorId": {
                  "type": "number",
                  "description": "楼层ID",
                  "required": false,
                  "enum": []
                },
                "spFloorName": {
                  "type": "string",
                  "description": "楼层名称",
                  "enum": []
                },
                "spSpaceId": {
                  "type": "number",
                  "description": "空间ID",
                  "required": false,
                  "enum": []
                },
                "spSpaceName": {
                  "type": "string",
                  "description": "空间名称",
                  "enum": []
                }
              },
              "required": false,
              "description": "位置信息"
            },
            "company": {
              "type": "string",
              "description": "公司",
              "enum": []
            },
            "customerName": {
              "type": "string",
              "description": "客户姓名",
              "enum": []
            },
            "customerTitle": {
              "type": "string",
              "description": "客户称谓",
              "enum": []
            },
            "department": {
              "type": "string",
              "description": "部门",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "email": {
              "type": "string",
              "description": "客户邮箱",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "客户id",
              "required": false,
              "enum": []
            },
            "mobile": {
              "type": "string",
              "description": "客户手机号",
              "enum": []
            },
            "position": {
              "type": "string",
              "description": "职位",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "qq": {
              "type": "string",
              "description": "QQ",
              "enum": []
            },
            "telephone": {
              "type": "string",
              "description": "客户电话",
              "enum": []
            },
            "wechat": {
              "type": "string",
              "description": "微信",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "更新客户信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_3",
      "tags": [
        "base-customer"
      ]
    }
  }
}