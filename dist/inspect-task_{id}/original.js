{
  "path": "/inspect-task/{id}",
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
      "summary": "巡检任务-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_22",
      "tags": [
        "inspect-task"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "exceptionNum": {
              "type": "number",
              "description": "异常数",
              "required": false,
              "enum": []
            },
            "expectEndTime": {
              "type": "string",
              "description": "预计结束时间",
              "enum": []
            },
            "expectStartTime": {
              "type": "string",
              "description": "预计开始时间",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "mark": {
              "type": "string",
              "description": "标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "missNum": {
              "type": "number",
              "description": "漏检数",
              "required": false,
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "巡检名称",
              "enum": []
            },
            "patchNum": {
              "type": "number",
              "description": "补检数",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目id",
              "required": false,
              "enum": []
            },
            "realityEndTime": {
              "type": "string",
              "description": "实际结束时间",
              "enum": []
            },
            "realityStartTime": {
              "type": "string",
              "description": "实际开始时间",
              "enum": []
            },
            "repairNum": {
              "type": "number",
              "description": "报修数",
              "required": false,
              "enum": []
            },
            "siteNum": {
              "type": "number",
              "description": "点位数",
              "required": false,
              "enum": []
            },
            "state": {
              "type": "string",
              "description": "状态 1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "status": {
              "type": "string",
              "description": "状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            },
            "submit": {
              "type": "string",
              "description": "提交 1-未提交 2-部分提交 3-全部提交 {未提交=Nd-1, 部分提交=Part-2, 全部提交=All-3}",
              "enum": [
                "1",
                "2",
                "3"
              ]
            },
            "workTeamId": {
              "type": "number",
              "description": "巡检人员",
              "required": false,
              "enum": []
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
      "summary": "修改巡检任务-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_29",
      "tags": [
        "inspect-task"
      ]
    }
  }
}