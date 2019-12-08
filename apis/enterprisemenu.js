{
  "path": "/enterprisemenu",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "tenantId",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "根据企业查询菜单",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_15",
      "tags": [
        "base-menu"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "permissionId": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "tenantId": {
              "type": "number",
              "description": "tenantId",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "修改企业菜单",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_12",
      "tags": [
        "base-menu"
      ]
    }
  }
}