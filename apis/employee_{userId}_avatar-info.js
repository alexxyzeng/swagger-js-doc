{
  "path": "/employee/{userId}/avatar-info",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "avatarUrl": {
              "type": "string",
              "description": "头像地址",
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
      "summary": "修改用户头像信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateAvatarInfoUsingPUT",
      "tags": [
        "base-employee"
      ]
    }
  }
}