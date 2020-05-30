{
  "path": "/departmentprojectref/{id}",
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
      "summary": "部门项目关联表-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_11",
      "tags": [
        "departmentprojectref"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "departmentId": {
              "type": "number",
              "description": "部门ID",
              "required": false,
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
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
      "summary": "修改部门项目关联表-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_12",
      "tags": [
        "departmentprojectref"
      ]
    },
    "delete": {
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
      "summary": "删除部门项目关联表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_12",
      "tags": [
        "departmentprojectref"
      ]
    }
  }
}