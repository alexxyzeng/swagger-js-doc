{
  "path": "/departmentprojectref",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "pageNumber",
            "description": "获取当前页",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "pageSize",
            "description": "每页显示的数量",
            "required": false,
            "enum": []
          },
          {
            "type": "string",
            "name": "pageSort",
            "description": "排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).",
            "enum": []
          },
          {
            "type": "number",
            "name": "id",
            "description": "ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "部门项目关联表-列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_15",
      "tags": [
        "departmentprojectref"
      ]
    },
    "post": {
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
        "path": [],
        "query": []
      },
      "summary": "新增部门项目关联表",
      "consumes": [
        "application/json"
      ],
      "operationId": "createUsingPOST_7",
      "tags": [
        "departmentprojectref"
      ]
    },
    "delete": {
      "parameters": {
        "body": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "idx",
            "name": "idx"
          }
        ],
        "path": [],
        "query": []
      },
      "summary": "批量删除部门项目关联表",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_11",
      "tags": [
        "departmentprojectref"
      ]
    }
  }
}