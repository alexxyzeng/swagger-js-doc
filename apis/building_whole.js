{
  "path": "/building/whole",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "number",
            "description": "lastUpdatedTimestamp",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "获取房产所有信息，包括所有楼宇、楼层和空间",
      "consumes": [
        "application/json"
      ],
      "operationId": "findAllUsingGET",
      "tags": [
        "base-building-building"
      ]
    }
  }
}