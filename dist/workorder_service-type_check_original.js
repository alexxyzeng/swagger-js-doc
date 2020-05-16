{
  "path": "/workorder/service-type/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "服务类型ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "上级服务类型id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "服务类型名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "编码",
            "enum": []
          }
        ]
      },
      "summary": "检验服务类型类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkTypeNameUsingGET_2",
      "tags": [
        "workorder-service-type"
      ]
    }
  }
}