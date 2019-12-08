{
  "path": "/permission",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "roleId",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "classify",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查询角色对应的权限",
      "consumes": [
        "application/json"
      ],
      "operationId": "searchPermissionUsingGET",
      "tags": [
        "base-permission"
      ]
    },
    "post": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "新增权限的基本信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "addPermissionUsingPOST",
      "tags": [
        "base-permission"
      ]
    },
    "put": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "roleId",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
          },
          {
            "type": "number",
            "description": "classify",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "修改角色对应的权限",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_42",
      "tags": [
        "base-permission"
      ]
    }
  }
}