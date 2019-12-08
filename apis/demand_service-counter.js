{
  "path": "/demand/service-counter",
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
            "description": "客户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "查询：编号、姓名、描述、需求类型、工单号、联系方式",
            "enum": []
          },
          {
            "type": "string",
            "description": "需求编码",
            "enum": []
          },
          {
            "type": "string",
            "description": "保障人",
            "enum": []
          },
          {
            "type": "string",
            "description": "创建人",
            "enum": []
          },
          {
            "type": "string",
            "description": "需求类型名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "需求内容",
            "enum": []
          },
          {
            "type": "number",
            "description": "是否评价 {未评价=1, 手动评价=2, 自动评价=3}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "是否回访 {未回访=1, 已回访=2}",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "是否关联工单 是否枚举{否=0, 是=1}",
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
            "description": "开始日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "结束日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "工单完成开始日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "工单完成结束日期",
            "enum": []
          },
          {
            "type": "string",
            "description": "反馈意见",
            "enum": []
          }
        ]
      },
      "summary": "需求-列表-服务台",
      "consumes": [
        "application/json"
      ],
      "operationId": "centreUsingGET",
      "tags": [
        "service-center-demand"
      ]
    }
  }
}