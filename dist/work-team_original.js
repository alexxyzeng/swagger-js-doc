{
  "path": "/work-team",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "string",
            "description": "工作组名称",
            "enum": []
          },
          {
            "type": "string",
            "description": "主管名称",
            "enum": []
          }
        ]
      },
      "summary": "工作组列表&搜索",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_64",
      "tags": [
        "work-team"
      ]
    },
    "post": {
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
        "path": [],
        "query": []
      },
      "summary": "新增工作组",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_49",
      "tags": [
        "work-team"
      ]
    }
  }
}