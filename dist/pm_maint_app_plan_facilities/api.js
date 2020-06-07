[
  "/pm/maint/app/plan/facilities",
  {
    "get": {
      "tags": [
        "pm-app"
      ],
      "summary": "维保对象-设备",
      "operationId": "findFacilitiesByTypeIdsUsingGET",
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
          "name": "facilityTypeIds",
          "in": "query",
          "description": "facilityTypeIds",
          "required": true,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf工单关联设备展示信息"
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
]