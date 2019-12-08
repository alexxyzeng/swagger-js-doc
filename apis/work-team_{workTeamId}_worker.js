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
            "type": "number",
            "description": "团队角色：1、主管 2、排程派工 3、追踪 4、验证 5、存档 6、执行人 {主管=1, 排程派工=2, 追踪=3, 验证=4, 存档=5, 执行人=6}",
            "required": false,
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
            "type": "number",
            "description": "是否查询处理中工单数量 是否枚举{否=0, 是=1}",
            "required": false,
            "enum": []
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false
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
            "description": "workers",
            "enum": []
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