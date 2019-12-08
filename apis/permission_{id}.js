{
  "path": "/permission/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改权限的基本信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "updatePermissionUsingPUT",
      "tags": [
        "base-permission"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除权限的基本信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "deletePermissionUsingDELETE",
      "tags": [
        "base-permission"
      ]
    }
  }
}