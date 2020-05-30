{
  "path": "/system/setting",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "isCustomize",
            "description": "是否用户自定义 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          }
        ]
      },
      "summary": "获取系统配置",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_58",
      "tags": [
        "systemsetting"
      ]
    }
  }
}