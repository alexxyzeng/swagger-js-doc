{
  "path": "/inspect/remind/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
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
      "summary": "巡检计划-提醒-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_14",
      "tags": [
        "inspect-plan"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "action": {
              "type": "string",
              "description": "动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start, 巡检任务结束（未完成）=End, 任务异常提醒=Exception}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "earlyTime": {
              "type": "number",
              "description": "提前时间",
              "required": false,
              "enum": []
            },
            "earlyUnit": {
              "type": "string",
              "description": "提前单位 {分钟=Min, 小时=Hour, 天=Day}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "isEmail": {
              "type": "string",
              "description": "是否邮件通知：0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isMobilePush": {
              "type": "string",
              "description": "是否移动推送：0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSiteMessage": {
              "type": "string",
              "description": "是否站内信通知：0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSms": {
              "type": "string",
              "description": "是否短信通知：0-否 1-是 是否枚举{否=No, 是=Yes}",
              "enum": [
                "0",
                "1"
              ]
            },
            "planId": {
              "type": "number",
              "description": "计划ID",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "remindBy": {
              "type": "number",
              "description": "提前人（工作组）",
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
      "summary": "修改巡检计划-提醒-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_22",
      "tags": [
        "inspect-plan"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
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
      "summary": "删除巡检计划-提醒",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_19",
      "tags": [
        "inspect-plan"
      ]
    }
  }
}