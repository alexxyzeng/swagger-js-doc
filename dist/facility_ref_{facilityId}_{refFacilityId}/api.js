[
  "/facility/ref/{facilityId}/{refFacilityId}",
  {
    "delete": {
      "tags": [
        "facility-ref"
      ],
      "summary": "设备关系-取消关联",
      "operationId": "deleteUsingDELETE_12",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityId",
          "in": "path",
          "description": "facilityId",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "refFacilityId",
          "in": "path",
          "description": "refFacilityId",
          "required": true,
          "type": "integer",
          "format": "int64"
        }
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
]