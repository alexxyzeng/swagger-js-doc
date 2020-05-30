{
  "path": "/inspect-site/job/facility/{id}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除巡检点位-工作任务-设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_28",
      "tags": [
        "inspect-site"
      ]
    }
  }
}