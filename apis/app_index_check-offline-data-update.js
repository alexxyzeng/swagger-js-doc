{
  "path": "/app/index/check-offline-data-update",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "设备信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "设备类型信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "位置信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "部门信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "工单优先级信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "工单工作流程信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "服务类型信息最后一次更新时间",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "需求类型信息最后一次更新时间",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "离线数据是否有更新",
      "consumes": [
        "application/json"
      ],
      "operationId": "offlineDataHasUpdateUsingGET",
      "tags": [
        "app-index"
      ]
    }
  }
}