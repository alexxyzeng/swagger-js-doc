{
  "path": "/customer/{id}",
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
      "summary": "查询客户信息-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_1",
      "tags": [
        "base-customer"
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
      "summary": "删除客户信息",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_1",
      "tags": [
        "base-customer"
      ]
    }
  }
}