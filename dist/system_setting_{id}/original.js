{
  "path": "/system/setting/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "系统配置-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_42",
      "tags": [
        "systemsetting"
      ]
    }
  }
}