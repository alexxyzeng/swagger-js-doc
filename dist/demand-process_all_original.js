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
            "description": "需求ID",
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
            "required": false,
            "description": "需求ID(批量查询)"
          }
        ]
      },
      "summary": "需求处理记录-列表-不分页",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_7",
      "tags": [
        "service-center-demand-process"
      ]
    }
  }
}