{
  "path": "/project/{id}",
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
      "summary": "项目详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "detailUsingGET_1",
      "tags": [
        "base-project"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "description": {
              "type": "string",
              "description": "项目组描述",
              "enum": []
            },
            "projectGroupName": {
              "type": "string",
              "description": "项目组名称",
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
      "summary": "修改项目信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "patchUsingPUT_2",
      "tags": [
        "base-project"
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
      "summary": "删除项目",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_37",
      "tags": [
        "base-project"
      ]
    }
  }
}