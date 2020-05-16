{
  "path": "/facilityType/{id}",
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
      "summary": "拼接设施编码",
      "consumes": [
        "application/json"
      ],
      "operationId": "getSplicingCodeUsingGET",
      "tags": [
        "facility-type"
      ]
    },
    "put": {
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
      "summary": "修改设施分类",
      "consumes": [
        "application/json"
      ],
      "operationId": "updateUsingPUT_18",
      "tags": [
        "facility-type"
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
      "summary": "根据id删除设施分类",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_14",
      "tags": [
        "facility-type"
      ]
    }
  }
}