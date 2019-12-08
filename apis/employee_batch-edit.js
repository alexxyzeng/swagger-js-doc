{
  "path": "/employee/batch-edit",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "orgDepartmentId": {
              "type": "number",
              "description": "部门ID",
              "required": false,
              "enum": []
            },
            "orgPositionId": {
              "type": "number",
              "description": "岗位ID",
              "required": false,
              "enum": []
            },
            "roles": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
            },
            "userIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false
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
      ]
    }
  }
}