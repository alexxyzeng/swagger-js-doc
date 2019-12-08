{
  "path": "/facilityType/relation",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "id",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查询设施分类是否被预防性维护和巡检关联",
      "consumes": [
        "application/json"
      ],
      "operationId": "relationUsingGET",
      "tags": [
        "facility-type"
      ]
    }
  }
}