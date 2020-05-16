{
  "path": "/floor/check-unique",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "spBuildingId",
            "description": "房产ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "displayName",
            "description": "名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "code",
            "description": "编码",
            "enum": []
          }
        ]
      },
      "summary": "检查楼层名称或编码是否重复",
      "consumes": [
        "application/json"
      ],
      "operationId": "checkUniqueUsingGET_1",
      "tags": [
        "base-building-floor"
      ]
    }
  }
}