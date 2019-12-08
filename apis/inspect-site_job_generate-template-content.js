{
  "path": "/inspect-site/job/generate-template-content",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "facilityIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "jobId": {
              "type": "number",
              "description": "工作任务ID",
              "required": false,
              "enum": []
            },
            "jobType": {
              "type": "string",
              "description": "任务类型：综合巡检、设备巡检 {综合巡检=Synthesize, 设备巡检=Facility}",
              "enum": [
                "1",
                "2"
              ]
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "templateIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "生成模板内容",
      "consumes": [
        "application/json"
      ],
      "operationId": "generateTemplateContentUsingPUT",
      "tags": [
        "inspect-site"
      ]
    }
  }
}