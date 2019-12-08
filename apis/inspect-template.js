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
            "type": "string",
            "description": "模板名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "模板类型：1-清洁 2-安保 3-设备 4-机房 5-抄表 6-绿化 {清洁=1, 安保=2, 设备=3, 机房=4, 抄表=5, 绿化=6}",
            "required": false,
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
      "operationId": "findUsingGET_39",
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
              "description": "类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean, 安保=Security, 设备=Facility, 机房=MachineRoom, 抄表=MeterReading, 绿化=Afforest}",
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
      "operationId": "createUsingPOST_25",
      "tags": [
        "inspect-template"
      ]
    },
    "put": {
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
      "summary": "批量删除巡检模板",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_14",
      "tags": [
        "inspect-template"
      ]
    }
  }
}