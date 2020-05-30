{
  "path": "/warehouse",
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
          },
          {
            "type": "string",
            "name": "code",
            "description": "仓库编码ID",
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "仓库名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "address",
            "description": "位置",
            "enum": []
          },
          {
            "type": "string",
            "name": "managements",
            "description": "仓库管理员",
            "enum": []
          },
          {
            "type": "number",
            "name": "managementId",
            "description": "仓库管理员ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "库存仓库-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_66",
      "tags": [
        "warehouse"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "isEmail": {
              "type": "string",
              "description": "是否邮件通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isMobilePush": {
              "type": "string",
              "description": "是否移动推送通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSiteMessage": {
              "type": "string",
              "description": "是否站内信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSms": {
              "type": "string",
              "description": "是否短信通知: 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "managements": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "仓库管理员"
            },
            "name": {
              "type": "string",
              "description": "仓库名称",
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "spBuildingId": {
              "type": "number",
              "description": "大厦ID",
              "required": false,
              "enum": []
            },
            "spFloorId": {
              "type": "number",
              "description": "楼层ID",
              "required": false,
              "enum": []
            },
            "spSpaceId": {
              "type": "number",
              "description": "空间ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增库存仓库",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_51",
      "tags": [
        "warehouse"
      ]
    }
  }
}