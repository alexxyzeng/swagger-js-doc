{
  "path": "/inspect-task/facility/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "facilityId": {
              "type": "number",
              "description": "设备ID",
              "required": false,
              "enum": []
            },
            "facilityStatus": {
              "type": "string",
              "description": "设备状态 1-在用 2-停用 {在用=Run, 停用=Stop}",
              "enum": [
                "1",
                "2"
              ]
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "顺序",
              "required": false,
              "enum": []
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
      "summary": "修改巡检任务-设备-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_29",
      "tags": [
        "inspect-task"
      ]
    }
  }
}