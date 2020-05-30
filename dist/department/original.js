{
  "path": "/department",
  "methods": {
    "post": {
      "parameters": {
        "body": [
          {
            "code": {
              "type": "string",
              "description": "编码",
              "enum": []
            },
            "departmentType": {
              "type": "array",
              "valueType": {
                "type": "string",
                "description": "",
                "enum": []
              },
              "required": false,
              "description": "职能类型"
            },
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "functionType": {
              "isMU": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "isPMC": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              }
            },
            "id": {
              "type": "number",
              "description": "部门id",
              "required": false,
              "enum": []
            },
            "level": {
              "type": "number",
              "description": "层级",
              "required": false,
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "部门名称",
              "enum": []
            },
            "parentId": {
              "type": "string",
              "description": "父级部门id",
              "enum": []
            },
            "pathName": {
              "type": "string",
              "description": "层级名称",
              "enum": []
            },
            "projectIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "绑定的项目"
            },
            "sort": {
              "type": "number",
              "description": "排序",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "创建部门",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_6",
      "tags": [
        "base-org-department"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "code": {
              "type": "string",
              "description": "编码",
              "enum": []
            },
            "departmentType": {
              "type": "array",
              "valueType": {
                "type": "string",
                "description": "",
                "enum": []
              },
              "required": false,
              "description": "职能类型"
            },
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "functionType": {
              "isMU": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "isPMC": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              }
            },
            "id": {
              "type": "number",
              "description": "部门id",
              "required": false,
              "enum": []
            },
            "level": {
              "type": "number",
              "description": "层级",
              "required": false,
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "部门名称",
              "enum": []
            },
            "parentId": {
              "type": "string",
              "description": "父级部门id",
              "enum": []
            },
            "pathName": {
              "type": "string",
              "description": "层级名称",
              "enum": []
            },
            "projectIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "绑定的项目"
            },
            "sort": {
              "type": "number",
              "description": "排序",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "更新部门",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_11",
      "tags": [
        "base-org-department"
      ]
    }
  }
}