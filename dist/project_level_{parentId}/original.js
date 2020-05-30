{
  "path": "/project/level/{parentId}",
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
      "operationId": "searchByLevelUsingGET_1",
      "tags": [
        "base-project"
      ]
    }
  }
}