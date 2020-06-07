[
  "/facility/ref/{facilityId}",
  {
    "put": {
      "tags": [
        "facility-ref"
      ],
      "summary": "设备关系-关联设备",
      "operationId": "createBatchUsingPUT",
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
          "in": "body",
          "name": "facilityRefDto",
          "description": "facilityRefDto",
          "required": true,
          "schema": {
            "$ref": "#/definitions/添加设备关系参数"
          }
        }
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
]