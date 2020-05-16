{
  "path": "/demand/type/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "需求类型ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "上级需求类型id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "需求名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "编码",
            "enum": []
          }
        ]
      },
      "summary": "检验需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkTypeNameUsingGET",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}