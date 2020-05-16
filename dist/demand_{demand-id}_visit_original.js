{
  "path": "/demand/{demand-id}/visit",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "content": {
              "type": "string",
              "description": "反馈意见-前端组件",
              "enum": []
            },
            "evaluateBy": {
              "type": "number",
              "description": "评价人",
              "required": false,
              "enum": []
            },
            "feedback": {
              "type": "string",
              "description": "反馈意见",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "satisfactions": {
              "type": "array",
              "valueType": {
                "type": {
                  "type": "string",
                  "description": "类型 {服务质量=Quality-1, 服务速度=Speed-2, 服务态度=Attitude-3}",
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
              "description": "需求评价满意度"
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "demand-id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增需求回访",
      "consumes": [
        "application/json"
      ],
      "operationId": "createVisitUsingPOST",
      "tags": [
        "service-center-demand-evaluate"
      ]
    }
  }
}