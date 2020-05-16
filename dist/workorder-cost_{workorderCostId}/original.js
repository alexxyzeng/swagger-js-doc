{
  "path": "/workorder-cost/{workorderCostId}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "cost": {
              "type": "number",
              "description": "花费",
              "enum": []
            },
            "description": {
              "type": "string",
              "description": "描述",
              "enum": []
            },
            "id": {
              "type": "number",
              "description": "由程序分配的唯一ID",
              "required": false,
              "enum": []
            },
            "name": {
              "type": "string",
              "description": "收费项名称",
              "enum": []
            },
            "projectId": {
              "type": "number",
              "description": "项目ID",
              "required": false,
              "enum": []
            },
            "woWorkorderId": {
              "type": "number",
              "description": "工单id",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "workorderCostId",
            "description": "workorderCostId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改费用",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_59",
      "tags": [
        "workorder-cost"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "workorderCostId",
            "description": "workorderCostId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除费用",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_59",
      "tags": [
        "workorder-cost"
      ]
    }
  }
}