{
  "path": "/work-team/{workTeamId}",
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
        "query": []
      },
      "summary": "工作组详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_59",
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
              "required": false
            },
            "description": {
              "type": "string",
              "description": "工作组描述",
              "enum": []
            },
            "dispatcher": {
              "type": "array",
              "valueType": {
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
              "required": false
            },
            "name": {
              "type": "string",
              "description": "工作组名称",
              "enum": []
            },
            "supervisor": {
              "type": "array",
              "valueType": {
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
              "required": false
            },
            "tracer": {
              "type": "array",
              "valueType": {
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
              "required": false
            },
            "verifier": {
              "type": "array",
              "valueType": {
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
              "required": false
            }
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
      "summary": "修改工作组",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_56",
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
      "operationId": "deleteUsingDELETE_59",
      "tags": [
        "work-team"
      ]
    }
  }
}