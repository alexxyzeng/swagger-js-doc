{
  "path": "/department/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "部门id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "上级部门id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "编码",
            "enum": []
          }
        ]
      },
      "summary": "检验部门名称或编码",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkNameOrCodeUsingGET",
      "tags": [
        "base-org-department"
      ]
    }
  }
}