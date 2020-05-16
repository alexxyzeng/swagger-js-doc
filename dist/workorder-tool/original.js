{
  "path": "/workorder-tool",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "cost": {
              "type": "number",
              "description": "花费 单位：元",
              "enum": []
            },
            "count": {
              "type": "number",
              "description": "数量",
              "required": false,
              "enum": []
            },
            "createTime": {
              "type": "string",
              "description": "创建时间",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "model": {
              "type": "string",
              "description": "工具型号",
              "enum": []
            },
            "modifyTime": {
              "type": "string",
              "description": "最后的修改时间",
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "工具名称",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "remark": {
              "type": "string",
              "description": "备注",
              "enum": []
            },
            "unit": {
              "type": "string",
              "description": "单位",
              "enum": []
            },
            "woWorkorderId": {
              "type": "number",
              "description": "工单id",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "创建工单关联的工具",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_57",
      "tags": [
        "workorder-tool"
      ]
    }
  }
}