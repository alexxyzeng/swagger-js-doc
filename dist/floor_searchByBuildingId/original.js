{
  "path": "/floor/searchByBuildingId",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "name": "spBuildingId",
            "description": "房产ID",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "查找楼层",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByBuildingIdUsingGET",
      "tags": [
        "base-building-floor"
      ]
    }
  }
}