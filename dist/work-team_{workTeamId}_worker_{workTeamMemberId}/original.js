{
  "path": "/work-team/{workTeamId}/worker/{workTeamMemberId}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "workTeamId",
            "description": "workTeamId",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "name": "workTeamMemberId",
            "description": "workTeamMemberId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除工作组执行人",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteWorkerUsingDELETE",
      "tags": [
        "work-team"
      ]
    }
  }
}