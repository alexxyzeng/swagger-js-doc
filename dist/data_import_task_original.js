{
  "path": "/data/import/task",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "description": "文档名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "更新时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "更新起始时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "更新结束时间",
            "enum": []
          },
          {
            "type": "string",
            "description": "操作人",
            "enum": []
          },
          {
            "type": "string",
            "description": "导入结果 {成功=Success-1, 部分失败=PartialFail-2, 处理中=Processing-3}",
            "enum": []
          }
        ]
      },
      "summary": "批量任务列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "listUsingGET",
      "tags": [
        "base-data-import"
      ]
    }
  }
}