{
  "path": "/demand/config/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
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
      "summary": "需求配置-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_3",
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
                "description": "是否自动确认 是否枚举{否=No-0, 是=Yes-1}",
                "enum": [
                  "0",
                  "1"
                ]
              },
              "timeUnit": {
                "type": "string",
                "description": "时间单位 {分钟=Min-1, 小时=Hour-2, 天=Day-3}",
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
                  "type": {
                    "type": "string",
                    "description": "需求通知类型 {需求创建=Create-1, 审核通过=Approved-2, 审核不通过=ApproveDenied-3, 需求创建工单=CreateOrder-4, 接单（需求关联工单第一次接单）=Ordered-5, 需求跟进=Track-6, 需求处理完成=Done-7, 需求自动验证=AutomaticVerification-8, 追加处理审核通过=AddProcessingApproved-9, 需求取消=Cancel-10}",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10"
                    ]
                  },
                  "enable": {
                    "type": "string",
                    "description": "是否开启 是否枚举{否=No-0, 是=Yes-1}",
                    "enum": [
                      "0",
                      "1"
                    ]
                  }
                },
                "required": false,
                "description": "需求通知列表"
              }
            },
            "satisfactionSet": {
              "isAutoEvaluate": {
                "type": "string",
                "description": "是否自动评价 是否枚举{否=No-0, 是=Yes-1}",
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
                "description": "设置项列表"
              },
              "timeUnit": {
                "type": "string",
                "description": "时间单位 {分钟=Min-1, 小时=Hour-2, 天=Day-3}",
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
      "summary": "修改需求配置-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_5",
      "tags": [
        "service-center-demand-config"
      ]
    }
  }
}