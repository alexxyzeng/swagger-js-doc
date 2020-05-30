{
  "path": "/inspect-task/job/{id}",
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
      "summary": "巡检任务-工作任务-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_25",
      "tags": [
        "inspect-task"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "facilityNum": {
              "type": "number",
              "description": "设备数",
              "required": false,
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "唯一id",
              "required": false,
              "enum": []
            },
            "intro": {
              "type": "string",
              "description": "内容介绍",
              "enum": []
            },
            "isMiss": {
              "type": "string",
              "description": "是否漏检 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isPatch": {
              "type": "string",
              "description": "是否补检 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "isSubmit": {
              "type": "string",
              "description": "是否提交 是否枚举{否=No-0, 是=Yes-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "job": {
              "type": "string",
              "description": "工作任务",
              "enum": []
            },
            "jobId": {
              "type": "number",
              "description": "任务ID",
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
            "operator": {
              "type": "number",
              "description": "操作人",
              "required": false,
              "enum": []
            },
            "patchBy": {
              "type": "number",
              "description": "补检人",
              "required": false,
              "enum": []
            },
            "patchByUser": {
              "type": "string",
              "description": "补检人",
              "enum": []
            },
            "patchEndTime": {
              "type": "string",
              "description": "补检结束时间",
              "enum": []
            },
            "patchStartTime": {
              "type": "string",
              "description": "补检开始时间",
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
            "siteId": {
              "type": "number",
              "description": "点位ID",
              "required": false,
              "enum": []
            },
            "status": {
              "type": "string",
              "description": "状态：1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}",
              "enum": [
                "1",
                "2"
              ]
            },
            "synthesizeNum": {
              "type": "number",
              "description": "综合数",
              "required": false,
              "enum": []
            },
            "taskId": {
              "type": "number",
              "description": "任务ID",
              "required": false,
              "enum": []
            },
            "taskSiteId": {
              "type": "number",
              "description": "任务定位ID",
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
      "summary": "修改巡检任务-工作任务-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_33",
      "tags": [
        "inspect-task"
      ]
    }
  }
}