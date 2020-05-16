{
  "path": "/inspecttaskremind",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "项目ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "巡检任务-提醒-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_36",
      "tags": [
        "inspect-task"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "action": {
              "type": "string",
              "description": "动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-任务异常提醒 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}",
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
              "description": "是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isMobilePush": {
              "type": "string",
              "description": "是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isOnlyExecutor": {
              "type": "string",
              "description": "是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSend": {
              "type": "string",
              "description": "是否已经发送 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSiteMessage": {
              "type": "string",
              "description": "是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSms": {
              "type": "string",
              "description": "是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "remindBy": {
              "type": "number",
              "description": "提醒人（工作组）",
              "required": false,
              "enum": []
            },
            "remindTime": {
              "type": "string",
              "description": "提醒时间",
              "enum": []
            },
            "taskId": {
              "type": "number",
              "description": "任务ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "新增巡检任务-提醒",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_24",
      "tags": [
        "inspect-task"
      ]
    }
  }
}