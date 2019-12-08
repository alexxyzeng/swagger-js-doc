{
  "path": "/role/relation",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "变更之前的角色id",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "变更后前的角色id",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "将角色下的用户关联至其它角色",
      "consumes": [
        "application/json"
      ],
      "operationId": "relationUsingPUT",
      "tags": [
        "base-role"
      ]
    }
  }
}