{
  "path": "/workorder/tracing",
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
            "description": "项目id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "工单编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "报障人名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "联系电话",
            "enum": []
          },
          {
            "type": "number",
            "description": "部门id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "服务类型id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "服务类型名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "设备分类ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "设备ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "是否收费 是否枚举{否=0, 是=1}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "服务类型关联id",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "string",
            "description": "优先级名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "大楼ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "楼层ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "空间ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "大楼名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "楼层名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "空间名称",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "string",
            "description": "问题描述",
            "enum": []
          },
          {
            "type": "number",
            "description": "关联的需求Id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "关联的需求编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "创建开始日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "创建结束日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "完成日期开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "完成日期结束",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "string",
            "description": "关键字筛选",
            "enum": []
          }
        ]
      },
      "summary": "工单追踪",
      "consumes": [
        "application/json"
      ],
      "operationId": "tracingUsingGET",
      "tags": [
        "workorder"
      ]
    }
  }
}