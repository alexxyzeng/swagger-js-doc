{
  "path": "/inspect-site/job/content/reorder/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "facilityId": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "ID",
              "required": false,
              "enum": []
            },
            "jobId": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "jobType": {
              "type": "string",
              "description": "null {综合巡检=Synthesize, 设备巡检=Facility}",
              "enum": [
                "1",
                "2"
              ]
            },
            "reorderType": {
              "type": "string",
              "description": "调整方向1-向上 2-向下 {向上=Up, 向下=Down}",
              "enum": [
                "1",
                "2"
              ]
            }
          }
        ],
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
      "summary": "点位-工作任务-内容调整顺序",
      "consumes": [
        "application/json"
      ],
      "operationId": "contentReorderUsingPUT",
      "tags": [
        "inspect-site"
      ]
    }
  }
}