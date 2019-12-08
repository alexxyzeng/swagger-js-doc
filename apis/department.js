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
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
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
      "operationId": "createUsingPOST_5",
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
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
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
      "operationId": "updateUsingPUT_10",
      "tags": [
        "base-org-department"
      ]
    }
  }
}