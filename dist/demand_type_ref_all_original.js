{
  "path": "/demand/type/ref/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "取增量数据用",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "需求类型全称",
            "enum": []
          }
        ]
      },
      "summary": "需求类型关联-全部",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_12",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}