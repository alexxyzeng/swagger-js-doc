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
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Of全部楼宇信息"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
}