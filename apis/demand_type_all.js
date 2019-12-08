{
  "path": "/demand/type/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "租户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "类型名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "类型名称-eq",
            "enum": []
          },
          {
            "type": "string",
            "description": "全称",
            "enum": []
          }
        ]
      },
      "summary": "需求类型-全部",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_9",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}