{
  "path": "/demand/config/by-product",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": []
      },
      "summary": "需求配置-根据项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByProductIdUsingGET",
      "tags": [
        "service-center-demand-config"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "autoAffirm": {
              "isAutoAffirm": {
                "type": "string",
                "description": "是否自动确认 是否枚举{否=No, 是=Yes}",
                "enum": [
                  "0",
                  "1"
                ]
              },
              "timeUnit": {
                "type": "string",
                "description": "时间单位 {分钟=Min, 小时=Hour, 天=Day}",
                "enum": [
                  "1",
                  "2",
                  "3"
                ]
              },
              "times": {
                "type": "number",
                "description": "需求完成后-时间",
                "required": false,
                "enum": []
              }
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "noticeSet": {
              "notices": {
                "type": "array",
                "valueType": {
                  "enable": {
                    "type": "string",
                    "description": "是否开启 是否枚举{否=No, 是=Yes}",
                    "enum": [
                      "0",
                      "1"
                    ]
                  },
                  "type": {
                    "type": "string",
                    "description": "需求通知类型 {需求创建=Create, 审核通过=Approved, 审核不通过=ApproveDenied, 创建工单=CreateOrder, 接单（需求关联工单第一次接单）=Ordered, 需求完成=Done, 需求验证待确认=PendingConfirm, 需求待评价=PendingEvaluate, 需求评价完成=EvaluateDone}",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9"
                    ]
                  }
                },
                "required": false
              }
            },
            "satisfactionSet": {
              "isAutoEvaluate": {
                "type": "string",
                "description": "是否自动评价 是否枚举{否=No, 是=Yes}",
                "enum": [
                  "0",
                  "1"
                ]
              },
              "satisfactions": {
                "type": "array",
                "valueType": {
                  "grade": {
                    "type": "string",
                    "description": "评级",
                    "enum": []
                  },
                  "isDefault": {
                    "type": "string",
                    "description": "是否默认 是否枚举{否=No, 是=Yes}",
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
                "required": false
              },
              "timeUnit": {
                "type": "string",
                "description": "时间单位 {分钟=Min, 小时=Hour, 天=Day}",
                "enum": [
                  "1",
                  "2",
                  "3"
                ]
              },
              "times": {
                "type": "number",
                "description": "需求确认后-时间",
                "required": false,
                "enum": []
              }
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "修改需求配置-根据项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateByProductUsingPUT",
      "tags": [
        "service-center-demand-config"
      ]
    }
  }
}