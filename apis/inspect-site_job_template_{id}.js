{
  "path": "/inspect-site/job/template/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "巡检点位-工作任务-模板-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_19",
      "tags": [
        "inspect-site"
      ]
    }
  }
}