{
  "path": "/warehouse/shelf/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "仓库货架-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_45",
      "tags": [
        "warehouse"
      ]
    },
    "put": {
      "parameters": {
        "body": [
          {
            "name": {
              "type": "string",
              "description": "货架名称",
              "enum": []
            },
            "warehouseId": {
              "type": "number",
              "description": "仓库ID",
              "required": false,
              "enum": []
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "修改仓库货架-部分",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_57",
      "tags": [
        "warehouse"
      ]
    },
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除仓库货架",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_57",
      "tags": [
        "warehouse"
      ]
    }
  }
}