{
  "path": "/workorder-space/{workorderSpaceId}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "workorderSpaceId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除工单空间位置",
      "consumes": [
        "application/json"
      ],
      "operationId": "removeByIdUsingDELETE_1",
      "tags": [
        "workorder-space"
      ]
    }
  }
}