{
  "path": "/geo/searchByLevelAndParentId",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "父ID",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "description": "层级",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "根据level parentId 得到行政区划列表",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByLevelAndParentIdUsingGET",
      "tags": [
        "base-geo"
      ]
    }
  }
}