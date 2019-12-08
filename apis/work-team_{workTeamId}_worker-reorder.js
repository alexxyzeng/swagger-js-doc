{
  "path": "/work-team/{workTeamId}/worker-reorder",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "description": "workers",
            "enum": []
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "workTeamId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "工作组执行人重排序",
      "consumes": [
        "application/json"
      ],
      "operationId": "workersReorderUsingPUT",
      "tags": [
        "work-team"
      ]
    }
  }
}