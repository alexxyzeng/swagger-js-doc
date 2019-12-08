{
  "path": "/demand/type",
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
          },
          {
            "type": "number",
            "description": "租户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "类型名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "类型名称-eq",
            "enum": []
          },
          {
            "type": "string",
            "description": "全称",
            "enum": []
          }
        ]
      },
      "summary": "需求类型-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_10",
      "tags": [
        "service-center-demand-type"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "code": {
              "type": "string",
              "description": "需求类型编码",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "需求描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "isRefOrder": {
              "type": "string",
              "description": "是否关联工单 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "parentId": {
              "type": "number",
              "description": "父ID",
              "required": false,
              "enum": []
            },
            "pathName": {
              "type": "string",
              "description": "全称",
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "排序",
              "required": false,
              "enum": []
            },
            "typeName": {
              "type": "string",
              "description": "类型名称",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_4",
      "tags": [
        "service-center-demand-type"
      ]
    },
    "delete": {
      "parameters": {
        "body": [
          {
            "description": "idx",
            "enum": []
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_7",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}