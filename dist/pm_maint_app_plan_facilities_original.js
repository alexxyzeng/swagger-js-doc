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
            "description": "facilityTypeIds"
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
      ]
    }
  }
}