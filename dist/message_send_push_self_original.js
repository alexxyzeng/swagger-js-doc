{
  "path": "/message/send/push/self",
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
            "type": "string",
            "description": "消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}",
            "enum": []
          },
          {
            "type": "string",
            "description": "发送时间开始",
            "enum": []
          },
          {
            "type": "string",
            "description": "发送时间结束",
            "enum": []
          },
          {
            "type": "string",
            "description": "消息内容",
            "enum": []
          },
          {
            "type": "string",
            "description": "是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          },
          {
            "type": "string",
            "description": "消息来源 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6}",
            "enum": []
          }
        ]
      },
      "summary": "个人移动推送信息列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findPushOfSelfUsingGET",
      "tags": [
        "base-message"
      ]
    }
  }
}