{
  "path": "/facilityType/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "设备分类ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "上级设备分类id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "设备分类名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "设备分类编码",
            "enum": []
          }
        ]
      },
      "summary": "检验设备分类",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkTypeNameUsingGET_1",
      "tags": [
        "facility-type"
      ]
    }
  }
}