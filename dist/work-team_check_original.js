{
  "path": "/work-team/check",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "工作组id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "上级工作组id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "工作组名称",
            "enum": []
          }
        ]
      },
      "summary": "检验工作组",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkTypeNameUsingGET_3",
      "tags": [
        "work-team"
      ]
    }
  }
}