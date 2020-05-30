{
  "path": "/project/level",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "parentId",
            "description": "parentId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "按层级查询项目信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchByLevelUsingGET",
      "tags": [
        "base-project"
      ]
    }
  }
}