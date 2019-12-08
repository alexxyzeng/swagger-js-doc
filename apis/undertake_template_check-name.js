{
  "path": "/undertake/template/check-name",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "模版id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "模版名称",
            "enum": []
          }
        ]
      },
      "summary": "承接查验模板名称唯一性校验, 名称唯一返回true",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkNameUsingGET_1",
      "tags": [
        "undertake-template"
      ]
    }
  }
}