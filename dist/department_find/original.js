{
  "path": "/department/find",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "string",
            "name": "pathName",
            "description": "层级名称",
            "enum": []
          },
          {
            "type": "number",
            "name": "isPMC",
            "description": "查询物业公司 1-仅查询物业公司",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查找部门列表-非树形",
      "consumes": [
        "application/json"
      ],
      "operationId": "findUsingGET_14",
      "tags": [
        "base-org-department"
      ]
    }
  }
}