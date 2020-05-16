{
  "path": "/pm/plan/calendar",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "日历开始时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "日历结束时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "关键词查询",
            "enum": []
          },
          {
            "type": "number",
            "description": "设备分类",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "大楼|楼层|房间 Id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "计划状态 {未开始=NotBegin-1, 处理中=InProgress-2, 已完成=JobDone-3, 已过期=Expired-4, 已逾期=Overdue-5}",
            "enum": []
          }
        ]
      },
      "summary": "维保计划-日历",
      "consumes": [
        "application/json"
      ],
      "operationId": "findCalendarUsingGET",
      "tags": [
        "pm-plan"
      ]
    }
  }
}