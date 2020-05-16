{
  "path": "/workorder/config/satisfaction/{id}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "satisfactionSet": {
              "isSyncDemand": {
                "type": "string",
                "description": "是否同步服务中心配置 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
                "enum": [
                  "0",
                  "1"
                ]
              },
              "satisfactions": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "grade": {
                    "type": "string",
                    "description": "评级",
                    "enum": []
                  },
                  "isDefault": {
                    "type": "string",
                    "description": "是否默认 是否枚举{否=No-0, 是=Yes-1}",
                    "enum": [
                      "0",
                      "1"
                    ]
                  },
                  "score": {
                    "type": "number",
                    "description": "分值",
                    "required": false,
                    "enum": []
                  }
                },
                "required": false,
                "description": "满意度设置列表"
              }
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
      "summary": "更新配置",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_2",
      "tags": [
        "workorder-config"
      ]
    }
  }
}