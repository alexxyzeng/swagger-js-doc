{
  "path": "/inspect-template",
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
            "description": "模板名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "模板类型：1-清洁 2-安保 3-设备 4-机房 5-抄表 6-绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}",
            "enum": []
          },
          {
            "type": "string",
            "description": "描述",
            "enum": []
          }
        ]
      },
      "summary": "巡检模板-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_40",
      "tags": [
        "inspect-template"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "模板名称",
              "enum": []
            },
            "type": {
              "type": "string",
              "description": "类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
              ]
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检模板",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_26",
      "tags": [
        "inspect-template"
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
      "summary": "批量删除巡检模板",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_10",
      "tags": [
        "inspect-template"
      ]
    }
  }
}