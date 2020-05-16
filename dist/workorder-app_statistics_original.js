{
  "path": "/workorder-app/statistics",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "工单统计类型 {抢单=Scramble-1, 派工=Dispatch-2, 处理=Process-3, 审批=Approval-4, 待验证或存档=CheckArchive-5, 我的报单=MyReport-6, 待转单=Transfer-7, 待完成=Pending-8, 待验证=Check-9, 待存档=Archive-10}"
          }
        ]
      },
      "summary": "工单待处理数量统计",
      "consumes": [
        "application/json"
      ],
      "operationId": "statisticsUsingGET_2",
      "tags": [
        "workorder-app"
      ]
    }
  }
}