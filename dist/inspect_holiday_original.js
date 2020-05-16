{
  "path": "/inspect/holiday",
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
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "名称 ",
            "enum": []
          },
          {
            "type": "string",
            "description": "是否工作日  是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          }
        ]
      },
      "summary": "巡检节假日-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_21",
      "tags": [
        "inspect"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "endDate": {
              "type": "string",
              "description": "结束日期",
              "enum": []
            },
            "isWorkday": {
              "type": "string",
              "description": "是否工作日 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "name": {
              "type": "string",
              "description": "名称",
              "enum": []
            },
            "startDate": {
              "type": "string",
              "description": "开始日期",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检节假日",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_14",
      "tags": [
        "inspect"
      ]
    },
    "put": {
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
      "summary": "批量删除巡检节假日",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_1",
      "tags": [
        "inspect"
      ]
    }
  }
}