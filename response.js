{
  "type": "object",
  "properties": {
    "code": {
      "type": "integer",
      "format": "int32",
      "example": 200,
      "description": "业务响应状态"
    },
    "data": {
      "description": "数据",
      "type": "object",
      "properties": {
        "cost": {
          "type": "number",
          "description": "花费"
        },
        "createTime": {
          "type": "string",
          "format": "date-time",
          "description": "创建时间"
        },
        "description": {
          "type": "string",
          "description": "描述"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "description": "由程序分配的唯一ID"
        },
        "isToolCost": {
          "type": "string",
          "description": "是否工具同步费用 是否枚举{否=No-0, 是=Yes-1}",
          "enum": [
            "0",
            "1"
          ]
        },
        "modifyTime": {
          "type": "string",
          "format": "date-time",
          "description": "最后的修改时间"
        },
        "name": {
          "type": "string",
          "description": "收费项名称"
        },
        "projectId": {
          "type": "integer",
          "format": "int64",
          "description": "项目ID"
        },
        "woWorkorderId": {
          "type": "integer",
          "format": "int64",
          "description": "工单id"
        }
      }
    },
    "message": {
      "type": "string",
      "description": "消息"
    },
    "traceId": {
      "type": "string",
      "description": "用于链路追踪的ID"
    }
  }
}