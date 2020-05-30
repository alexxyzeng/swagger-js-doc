{
  "path": "/project/list/property",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "供应商id/物业点id，更新时时传入",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "projectName",
            "description": "项目名称",
            "enum": []
          }
        ]
      },
      "summary": "物业点关联项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByPropertyUsingGET",
      "tags": [
        "base-project"
      ]
    }
  }
}