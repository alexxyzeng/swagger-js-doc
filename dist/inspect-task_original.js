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
            "type": "number",
            "description": "用户ID",
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
            "description": "巡检名称",
            "enum": []
          },
          {
            "type": "number",
            "description": "巡检人员id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "巡检人员",
            "enum": []
          },
          {
            "type": "number",
            "description": "点位数",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "异常数",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "报修数",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "漏检数",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "补检数",
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
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "任务状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}"
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "点位状态 1-正常 2-异常 3-漏检 4-补检 5-报修 {正常=Normal-1, 异常=AbNormal-2, 漏检=Miss-3, 补检=Supplement-4, 报修=Repair-5}"
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
          },
          {
            "type": "string",
            "description": "beginDateLimit",
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-查询列表",
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