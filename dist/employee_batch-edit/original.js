{
  "path": "/employee/batch-edit",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "accountActivationStatus": {
              "type": "string",
              "description": "账号状态 {失效=Failure-0, 激活=Activate-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "emLevel": {
              "type": "number",
              "description": "职级，来源于字典表的dictValue字段",
              "required": false,
              "enum": []
            },
            "emType": {
              "type": "string",
              "description": "用户类型：1、员工 2、领导层 3、管理层 4、供应商 {员工=EmTypeEnum-1, 领导层=EmTypeEnum-2, 管理层=EmTypeEnum-3, 供应商=EmTypeEnum-4, 内置用户=EmTypeEnum-5}",
              "enum": [
                "1",
                "2",
                "3",
                "4",
                "5"
              ]
            },
            "gender": {
              "type": "string",
              "description": "性别: 0、女 1、男 {女=GenderEnum-0, 男=GenderEnum-1}",
              "enum": [
                "0",
                "1"
              ]
            },
            "grantPartition": {
              "partitions": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "id": {
                    "type": "number",
                    "description": "id",
                    "required": false,
                    "enum": []
                  },
                  "name": {
                    "type": "string",
                    "description": "名称",
                    "enum": []
                  },
                  "pathName": {
                    "type": "string",
                    "description": "全路径",
                    "enum": []
                  }
                },
                "required": false,
                "description": "分区权限"
              },
              "propertyPoints": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "id": {
                    "type": "number",
                    "description": "id",
                    "required": false,
                    "enum": []
                  },
                  "name": {
                    "type": "string",
                    "description": "名称",
                    "enum": []
                  },
                  "pathName": {
                    "type": "string",
                    "description": "全路径",
                    "enum": []
                  }
                },
                "required": false,
                "description": "物业点权限"
              }
            },
            "grantProject": {
              "projectGroups": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "id": {
                    "type": "number",
                    "description": "id",
                    "required": false,
                    "enum": []
                  },
                  "name": {
                    "type": "string",
                    "description": "名称",
                    "enum": []
                  },
                  "pathName": {
                    "type": "string",
                    "description": "全路径",
                    "enum": []
                  }
                },
                "required": false,
                "description": "项目组权限"
              },
              "projects": {
                "type": "array",
                "valueType": {
                  "type": "object",
                  "id": {
                    "type": "number",
                    "description": "id",
                    "required": false,
                    "enum": []
                  },
                  "name": {
                    "type": "string",
                    "description": "名称",
                    "enum": []
                  },
                  "pathName": {
                    "type": "string",
                    "description": "全路径",
                    "enum": []
                  }
                },
                "required": false,
                "description": "项目权限"
              }
            },
            "orgDepartmentId": {
              "type": "number",
              "description": "部门ID",
              "required": false,
              "enum": []
            },
            "roleIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "角色ID"
            },
            "userIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "用户ID"
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量编辑用户",
      "consumes": [
        "application/json"
      ],
      "operationId": "batchEditUsingPUT",
      "tags": [
        "base-employee"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
}