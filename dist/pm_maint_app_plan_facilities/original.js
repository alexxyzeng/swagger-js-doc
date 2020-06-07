{
  "path": "/pm/maint/app/plan/facilities",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [],
        "query": [
          {
            "type": "array",
            "valueType": {
              "type": "number",
              "description": "",
              "required": true,
              "enum": []
            },
            "required": true,
            "description": "facilityTypeIds",
            "name": "facilityTypeIds"
          }
        ]
      },
      "summary": "维保对象-设备",
      "consumes": [
        "application/json"
      ],
      "operationId": "findFacilitiesByTypeIdsUsingGET",
      "tags": [
        "pm-app"
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
}