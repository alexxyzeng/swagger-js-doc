{
  "path": "/project-group/{projectGroupId}",
  "methods": {
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
            "name": "projectGroupId",
            "description": "projectGroupId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改项目组",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_46",
      "tags": [
        "base-project-group"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "projectGroupId",
            "description": "projectGroupId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除项目组",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_42",
      "tags": [
        "base-project-group"
      ]
    }
  }
}