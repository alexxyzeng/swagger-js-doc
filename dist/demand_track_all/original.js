{
  "path": "/demand/track/all",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "tenantId",
            "description": "租户ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "demandId",
            "description": "需求ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "需求跟进记录-全部",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_8",
      "tags": [
        "service-center-demand-track"
      ]
    }
  }
}