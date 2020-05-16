{
  "path": "/workorder/hasUnArchive",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "部门id",
            "name": "orgDepartmentIds"
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "服务类型id",
            "name": "woServiceTypeIds"
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "服务类型关联id",
            "name": "woServiceTypeRefIds"
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "优先级id",
            "name": "woPriorityIds"
          },
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": false,
              "enum": []
            },
            "required": false,
            "description": "slaId",
            "name": "woSlaIds"
          }
        ]
      },
      "summary": "是否存在未归档工单",
      "consumes": [
        "application/json"
      ],
      "operationId": "hasUnArchiveWorkorderUsingGET",
      "tags": [
        "workorder"
      ]
    }
  }
}