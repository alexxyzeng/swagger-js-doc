{
  "path": "/demand-process/all",
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
            "type": "number",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "需求ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "需求处理记录-列表-不分页",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_6",
      "tags": [
        "service-center-demand-process"
      ]
    }
  }
}