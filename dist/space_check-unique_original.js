{
  "path": "/space/check-unique",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "楼层ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "编码",
            "enum": []
          }
        ]
      },
      "summary": "检查空间名称或编码是否重复",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkUniqueUsingGET_2",
      "tags": [
        "base-building-space"
      ]
    }
  }
}