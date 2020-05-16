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
            "name": "departmentId",
            "description": "部门id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "parentId",
            "description": "上级部门id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "name",
            "description": "名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
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