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
              "description": "null {综合巡检=Synthesize-1, 设备巡检=Facility-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "reorderType": {
              "type": "string",
              "description": "调整方向1-向上 2-向下 {向上=Up-1, 向下=Down-2}",
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
            "name": "id",
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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
}