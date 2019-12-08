{
  "path": "/inspect-task",
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
            "description": "巡检名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "巡检人员",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "计划开始时间开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "计划开始时间结束",
            "enum": []
          },
          {
            "type": "string",
            "description": "计划结束时间开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "计划结束时间结束",
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
            "description": "开始时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "计划开始时间开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "计划开始时间结束",
            "enum": []
          },
          {
            "type": "string",
            "description": "计划结束时间开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "计划结束时间结束",
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-查询列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_30",
      "tags": [
        "inspect-task"
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
      "summary": "批量删除巡检任务",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_8",
      "tags": [
        "inspect-task"
      ]
    }
  }
}