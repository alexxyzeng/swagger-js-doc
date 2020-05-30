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
        "commonBy": {
          "type": "integer",
          "format": "int64",
          "description": "评论人"
        },
        "content": {
          "type": "string",
          "description": "评论内容"
        },
        "createTime": {
          "type": "string",
          "format": "date-time",
          "description": "创建时间"
        },
        "demandId": {
          "type": "integer",
          "format": "int64",
          "description": "需求ID"
        },
        "id": {
          "type": "integer",
          "format": "int64",
          "description": "由程序分配的唯一ID"
        },
        "modifyTime": {
          "type": "string",
          "format": "date-time",
          "description": "最后的修改时间"
        },
        "projectId": {
          "type": "integer",
          "format": "int64",
          "description": "项目ID"
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