{
  "path": "/workorder-evaluate/{workorderId}",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "feedback": {
              "type": "string",
              "description": "反馈意见",
              "enum": []
            },
            "satisfactions": {
              "type": "array",
              "valueType": {
                "grade": {
                  "type": "string",
                  "description": "评级",
                  "enum": []
                },
                "maxStar": {
                  "type": "number",
                  "description": "最大星数",
                  "required": false,
                  "enum": []
                },
                "score": {
                  "type": "number",
                  "description": "分值",
                  "required": false,
                  "enum": []
                },
                "star": {
                  "type": "number",
                  "description": "当前星数",
                  "required": false,
                  "enum": []
                },
                "type": {
                  "type": "string",
                  "description": "类型 {服务质量=ServiceQuality, 服务速度=ServiceSpeed, 服务态度=ServiceAttitude}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                }
              },
              "required": false
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增工单-客户评价表",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_52",
      "tags": [
        "workorder-evaluate"
      ]
    }
  }
}