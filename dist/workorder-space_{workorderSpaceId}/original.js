{
  "path": "/workorder-space/{workorderSpaceId}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "workorderSpaceId",
            "description": "workorderSpaceId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "删除工单空间位置",
      "consumes": [
        "application/json"
      ],
      "operationId": "removeByIdUsingDELETE_1",
      "tags": [
        "workorder-space"
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体Ofnull"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  }
}