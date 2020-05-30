{
  "path": "/work-team/{workTeamId}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "workTeamId",
            "description": "workTeamId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "工作组详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_69",
      "tags": [
        "work-team"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "archiver": {
              "type": "array",
              "valueType": {
                "type": "object",
                "employeeId": {
                  "type": "number",
                  "description": "成员ID",
                  "required": false,
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "工作组成员ID，为空代表新增",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "存档"
            },
            "description": {
              "type": "string",
              "description": "工作组描述",
              "enum": []
            },
            "dispatcher": {
              "type": "array",
              "valueType": {
                "type": "object",
                "employeeId": {
                  "type": "number",
                  "description": "成员ID",
                  "required": false,
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "工作组成员ID，为空代表新增",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "排程派工"
            },
            "name": {
              "type": "string",
              "description": "工作组名称",
              "enum": []
            },
            "parentId": {
              "type": "number",
              "description": "上级id",
              "required": false,
              "enum": []
            },
            "sort": {
              "type": "number",
              "description": "排序",
              "required": false,
              "enum": []
            },
            "supervisor": {
              "type": "array",
              "valueType": {
                "type": "object",
                "employeeId": {
                  "type": "number",
                  "description": "成员ID",
                  "required": false,
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "工作组成员ID，为空代表新增",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "主管"
            },
            "tracer": {
              "type": "array",
              "valueType": {
                "type": "object",
                "employeeId": {
                  "type": "number",
                  "description": "成员ID",
                  "required": false,
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "工作组成员ID，为空代表新增",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "追踪"
            },
            "verifier": {
              "type": "array",
              "valueType": {
                "type": "object",
                "employeeId": {
                  "type": "number",
                  "description": "成员ID",
                  "required": false,
                  "enum": []
                },
                "id": {
                  "type": "number",
                  "description": "工作组成员ID，为空代表新增",
                  "required": false,
                  "enum": []
                }
              },
              "required": false,
              "description": "验证"
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "workTeamId",
            "description": "workTeamId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改工作组",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_60",
      "tags": [
        "work-team"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "workTeamId",
            "description": "workTeamId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除工作组",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_62",
      "tags": [
        "work-team"
      ]
    }
  }
}