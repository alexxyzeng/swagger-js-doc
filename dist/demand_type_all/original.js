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
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "tenantId",
            "description": "租户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "typeName",
            "description": "类型名称",
            "enum": []
          },
          {
            "type": "string",
            "name": "eqTypeName",
            "description": "类型名称-eq",
            "enum": []
          },
          {
            "type": "string",
            "name": "pathName",
            "description": "全称",
            "enum": []
          }
        ]
      },
      "summary": "需求类型-全部",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_10",
      "tags": [
        "service-center-demand-type"
      ]
    }
  }
}