{
  "path": "/demand/type/check",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "code": {
              "type": "string",
              "description": "编码",
              "enum": []
            },
            "typeId": {
              "type": "number",
              "description": "需求ID",
              "required": false,
              "enum": []
            },
            "typeName": {
              "type": "string",
              "description": "需求名称",
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "检验需求类型",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkTypeNameUsingPUT",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}