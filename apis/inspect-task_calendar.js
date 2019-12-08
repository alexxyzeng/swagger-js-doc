{
  "path": "/inspect-task/calendar",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
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
      "summary": "巡检任务-日历",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_31",
      "tags": [
        "inspect-task"
      ]
    }
  }
}