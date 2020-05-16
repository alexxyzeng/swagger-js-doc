{
  "path": "/workorder-evaluate/customer/{workorderId}",
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
                "type": {
                  "type": "string",
                  "description": "类型 {服务质量=ServiceQuality-1, 服务速度=ServiceSpeed-2, 服务态度=ServiceAttitude-3}",
                  "enum": [
                    "1",
                    "2",
                    "3"
                  ]
                },
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
                }
              },
              "required": false,
              "description": "评价满意度"
            },
            "type": {
              "type": "string",
              "description": "评价类型 {客户评价=CustomerEvaluate-1, 维保工作评价=PmEvaluate-2}",
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
            "description": "workorderId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "客户评价",
      "consumes": [
        "application/json"
      ],
      "operationId": "customerEvaluateUsingPOST",
      "tags": [
        "workorder-evaluate"
      ]
    }
  }
}