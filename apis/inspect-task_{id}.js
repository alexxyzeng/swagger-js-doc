{
  "path": "/inspect-task/{id}",
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
      "summary": "巡检任务-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_21",
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
              "description": "标签 1-正常 2-异常 {正常=Normal, 异常=AbNormal}",
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
            "status": {
              "type": "string",
              "description": "状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart, 进行中=Process, 按时完成=Complate, 延期完成=DelayComplate, 未巡检=NoPolling}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
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
      "operationId": "updateUsingPUT_28",
      "tags": [
        "inspect-task"
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
      "summary": "删除巡检任务",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_27",
      "tags": [
        "inspect-task"
      ]
    }
  }
}