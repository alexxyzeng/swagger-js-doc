{
  "path": "/employee/{userId}/emno-info",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "emNo": {
              "type": "string",
              "description": "员工编号",
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "userId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改用户工号信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateEmNoInfoUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}