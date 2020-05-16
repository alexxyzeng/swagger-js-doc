{
  "path": "/pm/maint/{id}/copy",
  "methods": {
    "get": {
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
      "summary": "拷贝设置",
      "consumes": [
        "application/json"
      ],
      "operationId": "copyUsingGET",
      "tags": [
        "pm"
      ]
    }
  }
}