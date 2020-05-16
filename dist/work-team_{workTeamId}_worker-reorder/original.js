{
  "path": "/work-team/{workTeamId}/worker-reorder",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "workers",
            "name": "workers"
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "workTeamId",
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