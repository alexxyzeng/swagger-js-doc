{
  "code": {
    "type": "number",
    "description": "业务响应状态",
    "required": false,
    "enum": []
  },
  "data": {
    "workorderStatistics": {
      "type": "array",
      "valueType": {
        "type": {
          "type": "string",
          "description": "操作类型 {抢单=Scramble-1, 派工=Dispatch-2, 处理=Process-3, 审批=Approval-4, 待验证或存档=CheckArchive-5, 我的报单=MyReport-6, 待转单=Transfer-7, 待完成=Pending-8, 待验证=Check-9, 待存档=Archive-10}",
          "enum": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
          ]
        },
        "count": {
          "type": "number",
          "description": "数量",
          "required": false,
          "enum": []
        },
        "permission": {
          "type": "string",
          "description": "用户是否有此操作权限，app首页使用 是否枚举{否=No-0, 是=Yes-1}",
          "enum": [
            "0",
            "1"
          ]
        }
      },
      "required": false,
      "description": "工单权限及数量统计"
    }
  },
  "message": {
    "type": "string",
    "description": "消息",
    "enum": []
  },
  "traceId": {
    "type": "string",
    "description": "用于链路追踪的ID",
    "enum": []
  }
}
"/**\r\n * @typedef {object} code\r\n <%= DefinitionPropropety %\r\n *\r\n*/\n\n/**\r\n * @typedef {object} data\r\n <%= DefinitionPropropety %\r\n *\r\n*/\n\n/**\r\n * @typedef {object} message\r\n <%= DefinitionPropropety %\r\n *\r\n*/\n\n/**\r\n * @typedef {object} traceId\r\n <%= DefinitionPropropety %\r\n *\r\n*/"