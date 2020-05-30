{
  "path": "/inspect-site/job/facility",
  "methods": {
    "post": {
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
              "description": "设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}",
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
        "path": [],
        "query": []
      },
      "summary": "新增巡检点位-工作任务-设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_23",
      "tags": [
        "inspect-site"
      ]
    },
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
            "description": "idx",
            "name": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除巡检点位-工作任务-设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingPUT_7",
      "tags": [
        "inspect-site"
      ]
    }
  }
}