{
  "path": "/demand/{demand-id}/evaluate",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
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
                  "description": "类型 {服务质量=Quality, 服务速度=Speed, 服务态度=Attitude}",
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
            "description": "demand-id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增需求评价",
      "consumes": [
        "application/json"
      ],
      "operationId": "createEvaluateUsingPOST",
      "tags": [
        "service-center-demand-evaluate"
      ]
    }
  }
}