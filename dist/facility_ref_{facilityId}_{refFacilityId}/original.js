{
  "path": "/facility/ref/{facilityId}/{refFacilityId}",
  "methods": {
    "delete": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "facilityId",
            "description": "facilityId",
            "required": true,
            "enum": []
          },
          {
            "type": "number",
            "name": "refFacilityId",
            "description": "refFacilityId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "设备关系-取消关联",
      "consumes": [
        "application/json"
      ],
      "operationId": "deleteUsingDELETE_16",
      "tags": [
        "facility-ref"
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