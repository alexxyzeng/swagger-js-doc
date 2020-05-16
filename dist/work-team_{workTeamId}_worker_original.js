{
  "path": "/work-team/{workTeamId}/worker",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "workTeamId",
            "required": true,
            "enum": []
          }
        ],
        "query": [
          {
            "type": "string",
            "description": "团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}",
            "enum": []
          },
          {
            "type": "string",
            "description": "成员姓名",
            "enum": []
          },
          {
            "type": "string",
            "description": "员工编号",
            "enum": []
          },
          {
            "type": "string",
            "description": "手机号",
            "enum": []
          },
          {
            "type": "string",
            "description": "部门名",
            "enum": []
          },
          {
            "type": "string",
            "description": "技能",
            "enum": []
          },
          {
            "type": "number",
            "description": "员工id",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "是否查询处理中工单数量 是否枚举{否=No-0, 是=Yes-1}",
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=Supervisor-1, 排程派工=Dispatcher-2, 追踪=Tracer-3, 验证=Verifier-4, 存档=Archiver-5, 执行人=Worker-6}"
          },
          {
            "type": "array",
            "valueType": {
              "type": "string",
              "description": "",
              "enum": []
            },
            "required": false,
            "description": "排序"
          }
        ]
      },
      "summary": "工作组执行人列表&搜索",
      "consumes": [
        "application/json"
      ],
      "operationId": "findWorkersUsingGET",
      "tags": [
        "work-team"
      ]
    },
    "post": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "description": "",
              "enum": []
            },
            "required": true,
            "description": "workers"
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "workTeamId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "新增工作组执行人",
      "consumes": [
        "application/json"
      ],
      "operationId": "createWorkersUsingPOST",
      "tags": [
        "work-team"
      ]
    }
  }
}