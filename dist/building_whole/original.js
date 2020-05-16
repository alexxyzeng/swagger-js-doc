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
            "name": "lastUpdatedTimestamp",
            "description": "lastUpdatedTimestamp",
            "required": false,
            "enum": []
          },
          {
            "type": "number",
            "name": "projectId",
            "description": "projectId",
            "required": false,
            "enum": []
          }
        ]
      },
      "summary": "获取房产所有信息，包括所有楼宇、楼层和空间，随后拍需显示上传项目ID",
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