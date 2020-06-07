{
  "path": "/facility/ref/{facilityId}",
  "methods": {
    "put": {
      "parameters": {
        "body": [
          {
            "facilityId": {
              "type": "number",
              "description": "设备id",
              "required": false,
              "enum": []
            },
            "parentFacilityId": {
              "type": "number",
              "description": "上级设备id",
              "required": false,
              "enum": []
            },
            "refFacilityIds": {
              "type": "array",
              "valueType": {
                "type": "number",
                "description": "",
                "required": false,
                "enum": []
              },
              "required": false,
              "description": "关联设备ID"
            }
          }
        ],
        "path": [
          {
            "type": "number",
            "name": "facilityId",
            "description": "facilityId",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "设备关系-关联设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "createBatchUsingPUT",
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
        "201": {
          "description": "Created"
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